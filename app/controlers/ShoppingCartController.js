'use strict';

var ShoppingCart = require('../models/ShoppingCartModel');

exports.add_to_cart = function(req, res, next) {
    var new_ShoppingCart = new ShoppingCart(req.body);
    ShoppingCart.addToCart(new_ShoppingCart, function(err, ShoppingCart) {
        if (err){
          next(err);
        } else{
          res.json(ShoppingCart);
        }
    });
};
exports.get_cart_products = function(req, res, next) {
  ShoppingCart.getShoppingCartProducts(req.params.cartId, function(err, ShoppingCart) {
    if (err){
      next(err);
    } else{
      res.json(ShoppingCart);
    }
    
  });
};
exports.delete_cart = function(req, res, next) {
  ShoppingCart.remove( req.params.cartId, function(err, response) {
    if (err){
      next(err);
    } else{
      res.json({ message: 'ShoppingCart successfully deleted' });
    }
  });
};