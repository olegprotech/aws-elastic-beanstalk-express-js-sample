const express = require('express');
const app = express();
const port = 8080;
message = 'Hello World!!!';
app.get('/', (req, res) => res.send(message));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
