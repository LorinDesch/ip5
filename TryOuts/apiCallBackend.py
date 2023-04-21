from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import coreapi


class APIRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')  # Enable CORS for all origins
        self.end_headers()

        with open('loginData.txt') as f:
            data = f.readlines()
            username = data[0].strip()
            password = data[1].strip()

        client = coreapi.Client()
        schema = client.get("http://86.119.43.87/docs/")
        action = ["account", "create"]
        params = {
            "username": username,
            "password": password,
        }
        result = client.action(schema, action, params=params)
        response = json.dumps(result)
        self.wfile.write(bytes(response, "utf8"))


def run_server():
    server_address = ('localhost', 3000)
    httpd = HTTPServer(server_address, APIRequestHandler)
    print('Starting server on port 3000...')
    httpd.serve_forever()


if __name__ == '__main__':
    run_server()
