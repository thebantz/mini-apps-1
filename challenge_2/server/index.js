const express = require('express');
const app = express();
const port = 8000;
const fs = require('fs');
const os = require('os');
const path = require('path');
const bodyParser = require('body-parser');
const indexFile = '/Users/nicolediannep.banta/Downloads/hrsf126-mini-apps-1/challenge_2/client/dist/index.html';


app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const filename = path.join(__dirname, 'output.csv');
const output = []; // holds all rows of data

app.get('/', (req, res) => res.sendFile(indexFile));
app.post('/rhino', (req, res) => {

  console.log('json', req.body.jsondata);

  let flatArr = [];
  let checkForChild = (jsonObj) => {
    let one = {};
    for (var key in jsonObj) {
      if (Array.isArray(jsonObj[key])) {
        checkForChild(jsonObj[key]);
      } else {
        one[key] = jsonObj[key];
      }
    }
    flatArr.push(one);
    return flatArr;
  }

  // console.log(JSON.parse(req.body.jsondata));
  let data = checkForChild(JSON.parse(req.body.jsondata));

  console.log('JSON data received', data);

  data.forEach((d) => {
    const row = [];
    for (var key in d) {
      row.push(d[key]);
    }
    output.push(row.join());
  });

  fs.writeFileSync(filename, output.join(os.EOL));
  res.redirect('/');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));