const express = require('express');
const app = express();
const port = 9000;

app.get('/', (_, res) => res.send('Hello World!'));


app.post('/', function (_, res) { res.send('Got a POST request') });

app.put('/', function (_, res) { res.send('Got a PUT request') });

app.listen(port, () => console.log(`Server start at port ${port}`));