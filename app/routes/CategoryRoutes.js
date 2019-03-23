'user strict';
module.exports = function(app) {
  var categoryController = require('../controlers/CategoryController');

  app.route('/categories')
  .get(categoryController.get_categories)
  .post(categoryController.add);

  app.route('/categories/:categoryId')
  .get(categoryController.get_category_details)
  .put(categoryController.update)
  .delete(categoryController.delete);

  app.route('/categories/products/:categoryId')
  .get(categoryController.get_category_products)
};