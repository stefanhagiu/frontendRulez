const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;

app.get('/', (_, res) => res.send('Hello World!'));
app.put('/201', (_, res) => res.status(201).send('Created'));
app.get('/202', (_, res) => res.status(202).send('Accepted'));
app.get('/203', (_, res) => res.status(203).send('Non-Authoritativ Information'));
app.get('/204', (_, res) => res.status(204).send('No Content'));

app.get('/301', (_, res) => res.status(301).send('Moved Permanently'));
app.get('/302', (_, res) => res.status(302).send('Found'));
app.get('/303', (_, res) => res.status(303).send('See Other'));
app.get('/304', (_, res) => res.status(304).send('Not Modified'));

app.get('/400', (_, res) => res.status(400).send('Bad request'));
app.get('/401', (_, res) => res.status(401).send('Unauthorized'));
app.get('/402', (_, res) => res.status(402).send('Payment Required'));
app.get('/403', (_, res) => res.status(403).send('Forbidden'));
app.get('/405', (_, res) => res.status(405).send('Method not Allowed'));
app.delete('/405', (_, res) => res.send('Method is Allowed'));

app.get('/500', (_, res) => { res.status(500).send('Internet server error') });
app.get('/501', (_, res) => { res.status(501).send('Not Implemented') });
app.delete('/501', (_, res) => { res.send('Is Implemented') });
app.get('/502', (_, res) => { res.status(502).send('Bad Gateway') });
app.get('/503', (_, res) => { res.status(503).send('Service Unavailable') });

app.post('/', function (_, res) { res.send('Got a POST request') });
app.post('/postWithData', [bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.send('Message received');
}]);

app.post('/postWithDataHardWay', function (req, res) {
    let body = [];

    req
        .on('data', (chunk) => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(JSON.parse(body));
            res.send('Message received');
        })
        .on('error', (err) => {
            res.status(500).send(err);
        });
});


app.put('/', function (_, res) { res.send('Got a PUT request') });

app.delete('/', function (_, res) { res.send('Got a DELETE request') });

/*
app.use(function(_, res, _) { res.status(404).send("Could not find the URI requested")});

app.use(function(err, _, res, _) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
*/

app.use(express.static('public'));
app.listen(port, () => console.log(`Server start at port ${port}`));