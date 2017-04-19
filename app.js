const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const pug = require('pug');
const marked = require('marked');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.text());
app.use(cookieParser());
app.set('view engine', "pug");
app.set("views","views");


app.use(express.static('public'));

app.post("/actions/save", (req, res) => {
  let writeStream = fs.createWriteStream('data/' + req.query.fileName)
  writeStream.write(req.body)
  writeStream.end();
  res.send('1');
});

app.get("/actions/load", (req, res) => {
  let str = '';
  let fileName = req.query.fileName;
  let readStream = fs.createReadStream('./data/' + fileName);
  readStream.on('data', (chunk) => {
    str += chunk
  }).on('end', () => {
      res.send(str)
  });
});


app.get("/actions/new", (req, res) => {
  let writeStream = fs.createWriteStream('data/' + req.query.fileName);
  writeStream.write(' ');
  writeStream.end();
  res.send('1');
})

app.get("*", (req, res) => {
  if(req.url == '/') {
    if(req.cookies.lastEdited !== undefined) {
      res.redirect('/' + req.cookies.lastEdited);
    }
    else {
      res.redirect('/MARKDOWN.md');
    }
  }
  else {
    fs.readdir('./data/', (error, files) => {
      res.render("Index", {
        listOfFiles: files
      });
    });
  }
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
