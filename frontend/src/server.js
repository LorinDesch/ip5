const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();

const allowedOrigins = ['http://localhost:3001'];

// enable CORS for the allowed origins
app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

// handle POST requests to the /account/ route
app.post('/account/', (req, res) => {
    const options = {
        hostname: '86.119.43.87',
        port: 80,
        path: '/account/',
        method: req.method,
        headers: req.headers
    };

    const proxyReq = http.request(options, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res);
    });

    req.pipe(proxyReq);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
