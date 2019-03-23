'use strict';

var ShoppingCart = require('../models/ShoppingCartModel');

exports.add_to_cart = function(req, res) {
    var new_ShoppingCart = new ShoppingCart(req.body);
    ShoppingCart.addToCart(new_ShoppingCart, function(err, ShoppingCart) {
        if (err){
          res.status(400).send(err);
        } else{
          res.json(ShoppingCart);
        }
    });
};
exports.get_cart_products = function(req, res) {
  ShoppingCart.getShoppingCartProducts(req.params.cartId, function(err, ShoppingCart) {
    if (err){
      res.status(400).send(err);
    } else{
      res.json(ShoppingCart);
    }
    
  });
};
exports.delete_cart = function(req, res) {
  ShoppingCart.remove( req.params.cartId, function(err, response) {
    if (err){
      res.status(400).send(err);
    } else{
      res.json({ message: 'ShoppingCart successfully deleted' });
    }
  });
};