const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to Web Server');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
