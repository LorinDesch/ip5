const express = require('express');
const cors = require('cors');
const http = require('http');


/**
 * Server.js got setup for handling login requests from the frontend. It is not used in the Project, since there were
 * Errors with the retreiving Server at the time of implementation.
 *
 */

const app = express();

const allowedOrigins = ['http://localhost:3000'];

// enable CORS for the allowed origins
app.use(cors({
    origin: function (origin, callback) {
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
        let data = '';
        proxyRes.on('data', (chunk) => {
            data += chunk;
        });
        proxyRes.on('end', () => {
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            res.end(data);

            const jsonData = JSON.parse(data);
            if (jsonData.token) {
                console.log("Besmath Token: " + jsonData.token);
            } else {
                console.log("No token");
            }
        });
    });

    req.pipe(proxyReq);

    proxyReq.on('error', (err) => {

        console.log(err);

        if (err.code === 'ECONNREFUSED') {
            res.status(500).send('Server Error: Connection Refused');
        } else {
            res.status(401).send('Invalid Credentials');
        }
    });

});


//Handle GET requests to the /groups/ route
app.get('/groups', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const options = {
            hostname: '86.119.43.87',
            port: 80,
            path: '/groups/',
            method: 'GET',
            headers: {
                Authorization: `Token ${token}`
            }
        };
        const proxyReq = http.request(options, (proxyRes) => {
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res);
        });
        req.pipe(proxyReq);
    } catch (error) {
        console.log("Error in /groups/ route: " + error);
        res.status(500).send('Server Error');
    }
});

//Handle GET requests to the /groups/:groupId/groupAffiliations/ route
app.get('/groups/:groupId/groupAffiliations/', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const groupId = req.params.groupId;
        const options = {
            hostname: '86.119.43.87',
            port: 80,
            path: `/groups/${groupId}/groupAffiliations/`,
            method: 'GET',
            headers: {
                Authorization: `Token ${token}`,
            },
        };
        const proxyReq = http.request(options, (proxyRes) => {
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res);
        });
        req.pipe(proxyReq);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

//Handle GET requests to the /groups/ route
app.get('/challenges', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const options = {
            hostname: '86.119.43.87',
            port: 80,
            path: '/challenges/',
            method: 'GET',
            headers: {
                Authorization: `Token ${token}`
            }
        };
        const proxyReq = http.request(options, (proxyRes) => {
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res);
        });
        req.pipe(proxyReq);
    } catch (error) {
        console.log("Error in /challenges/ route: " + error);
        res.status(500).send('Server Error');
    }
});

// Handle GET requests to the /diary/ route
app.get('/diary/', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const options = {
            hostname: '86.119.43.87',
            port: 80,
            path: '/diary/',
            method: 'GET',
            headers: {
                Authorization: `Token ${token}`
            }
        };
        const proxyReq = http.request(options, (proxyRes) => {
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res);
        });
        req.pipe(proxyReq);
    } catch (error) {
        console.log("Error in /diary/ route: " + error);
        res.status(500).send('Server Error');
    }
});


app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
