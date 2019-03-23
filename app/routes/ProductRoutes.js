'user strict';
module.exports = function(app) {
  var products = require('../controlers/ProductController');
  var validateUser = require('../validateUser');

  app.route('/products')
  .get(products.list_all_Products)
  .post(products.create_a_Product);

  app.route('/products/:productId')
  .get(products.read_a_Product)
  .put(products.update_a_Product)
  .delete(products.delete_a_Product);

  app.route('/products/search/:search')
  .get(products.search_Products);

  app.route('/products/department/:departmentId')
  .get(products.list_department_Products);

  app.route('/products/category/:categoryId')
  .get(products.list_category_Products);  
};