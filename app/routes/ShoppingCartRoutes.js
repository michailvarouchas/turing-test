'user strict';
module.exports = function(app) {
  var shoppingCartController = require('../controlers/ShoppingCartController');

  app.route('/cart')
  .post(shoppingCartController.add_to_cart);

  app.route('/cart/:cartId')
  .get(shoppingCartController.get_cart_products)
  .delete(shoppingCartController.delete_cart);;
};