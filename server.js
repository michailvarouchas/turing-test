const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;

const dotenv = require('dotenv');
dotenv.config();
//logger
const logger = require('morgan');
app.use(logger('dev'));
// jwt secret token
app.set('secretKey', 'mysupersafesecret'); 

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./app/routes/Routes');
routes(app);

var errorHandler = require('./errorHandler');
errorHandler(app);