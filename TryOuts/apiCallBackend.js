const http = require('http');
const fs = require('fs');
const coreapi = require('coreapi');
const NodeTransport = require('coreapi-node-transport');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        fs.readFile('loginData.txt', 'utf8', (err, data) => {
            if (err) throw err;

            const [username, password] = data.trim().split('\n');

            const transport = new NodeTransport('http://86.119.43.87/docs/');
            const client = new coreapi.Client({ transport: transport });
            client.action(['account', 'create'], { username: username, password: password }).then((result) => {
                res.end(JSON.stringify(result));
            }).catch((err) => {
                console.error(err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            });
        });
    } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
