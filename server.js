const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;

const dotenv = require('dotenv');
dotenv.config();
// jwt secret token
app.set('secretKey', 'mysupersafesecret'); 

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1qaz2wsx',
    database: 'turingtest'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var productRoutes = require('./app/routes/ProductRoutes');
var userRoutes = require('./app/routes/UserRoutes');
var paypalRoutes = require('./app/routes/paypalRoutes');
var cartRoutes = require('./app/routes/ShoppingCartRoutes');
var categoryRoutes = require('./app/routes/CategoryRoutes');
var attributeRoutes = require('./app/routes/AttributeRoutes');
var departmentRoutes = require('./app/routes/DepartmentRoutes');
productRoutes(app);
userRoutes(app);
paypalRoutes(app);
cartRoutes(app);
categoryRoutes(app);
attributeRoutes(app);
departmentRoutes(app);

var errorHandler = require('./errorHandler');
errorHandler(app);