const express = require('express');

const app = express();

app.get('/', (req, res)=> res.send('Hello World con express'))

app.listen(8080);
console.log('Server allocate on port 8080')