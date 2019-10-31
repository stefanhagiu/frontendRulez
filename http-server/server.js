const express = require('express');
const app = express();
const port = 9000;

app.get('/', (_, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server start at port ${port}`));