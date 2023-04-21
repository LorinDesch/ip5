const http = require('http');
const fs = require('fs');
const coreapi = require('coreapi');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.setHeader('Content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*'); // Enable CORS for all origins
        res.writeHead(200);

        fs.readFile('loginData.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.end(JSON.stringify({error: 'Internal server error'}));
                return;
            }

            const [username, password] = data.trim().split('\n');

            const client = new coreapi.Client();
            client.get('http://86.119.43.87/docs/').then(schema => {
                const action = ['account', 'create'];
                const params = {username, password};
                client.action(schema, action, params).then(result => {
                    res.end(JSON.stringify(result));
                }).catch(err => {
                    console.error(err);
                    res.end(JSON.stringify({error: 'Internal server error'}));
                });
            }).catch(err => {
                console.error(err);
                res.end(JSON.stringify({error: 'Internal server error'}));
            });
        });
    } else {
        res.writeHead(405); // Method Not Allowed
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Starting server on port 3000...');
});
