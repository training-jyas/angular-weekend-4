const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  mongoose
} = require('./db/mongoose');

const app = express();

// parse the data as json
app.use(bodyParser.json());

// use cors
app.use(cors());

// logger middleware
app.use((req, res, next) => {
  var log = `${new Date()} : ${req.url} : ${req.method} : ${req.statusCode} : \n`;
  fs.appendFile('server.log', log, () => {});
  next();
});

// include product apis
require('./api/product')(app);

app.listen('3000', () => {
  console.log('Server is running on 3000');
});