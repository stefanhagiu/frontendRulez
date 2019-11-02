const express = require('express');
const app = express();
const port = 9000;

app.get('/', (_, res) => res.send('Hello World!'));
app.get('/500', (a, b) => { throw Error('Server Error') });

app.post('/', function (_, res) { res.send('Got a POST request') });

app.put('/', function (_, res) { res.send('Got a PUT request') });

app.delete('/', function (_, res) { res.send('Got a DELETE request') });


app.use(function(_, res, _) { res.status(404).send("Could not find the URI requested")});

app.use(function(err, _, res, _) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use(express.static('public'));
app.listen(port, () => console.log(`Server start at port ${port}`));