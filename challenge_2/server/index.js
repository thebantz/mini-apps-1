const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');
const indexFile = '/Users/nicolediannep.banta/Downloads/hrsf126-mini-apps-1/challenge_2/client/dist/index.html';

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(indexFile));
app.post('/rhino', (req, res) => {
  console.log('hello', req.body);
  res.redirect('/');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));