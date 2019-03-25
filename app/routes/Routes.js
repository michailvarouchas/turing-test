'user strict';
module.exports = function(app) {
    const productRoutes = require('./ProductRoutes');
    const userRoutes = require('./UserRoutes');
    const paypalRoutes = require('./paypalRoutes');
    const cartRoutes = require('./ShoppingCartRoutes');
    const categoryRoutes = require('./CategoryRoutes');
    const attributeRoutes = require('./AttributeRoutes');
    const departmentRoutes = require('./DepartmentRoutes');

    productRoutes(app);
    userRoutes(app);
    paypalRoutes(app);
    cartRoutes(app);
    categoryRoutes(app);
    attributeRoutes(app);
    departmentRoutes(app);
}