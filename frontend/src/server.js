const http = require('http');
const httpProxy = require('http-proxy');

const target = 'http://localhost:3000'; // Replace with your development server URL
const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
    const { method, url, headers } = req;

    // Log the request method, URL, and headers
    console.log(`Received ${method} request to ${url}`);
    console.log(`Headers: ${JSON.stringify(headers, null, 2)}`);

    // Parse the request body
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        const { username, password } = JSON.parse(body);

        // Log the username and password
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);

        // Forward the request to the development server
        proxy.web(req, res, { target });
    });
});

server.listen(8000); // Listen on port 8000
