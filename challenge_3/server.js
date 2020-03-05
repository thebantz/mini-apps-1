const express = require('express');
const app = express();
const port = 3030;
const path = require('path');


app.use('/', express.static(path.join(__dirname, './public')));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/user', function (req, res) {
  res.send('Got a POST request from a user');
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));