const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const pug = require('pug');
const marked = require('marked');

const app = express();
const port = 3000;

app.set('view engine', "pug");
app.set("views","views");


app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("Index");
});


app.listen(port, () => {
  console.log('Listening on port ' + port);
});
