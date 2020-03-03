const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));