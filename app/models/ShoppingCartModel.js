'user strict';
var Connection = require('./db.js');

//ShoppingCart object constructor
var ShoppingCart = function(ShoppingCart){
    this.item_id = ShoppingCart.item_id;
    this.cart_id = ShoppingCart.cart_id;
    this.product_id = ShoppingCart.product_id;
    this.attributes = ShoppingCart.attributes;
    this.quantity = ShoppingCart.quantity;
    this.buy_now = ShoppingCart.buy_now;
};
ShoppingCart.addToCart = function addToCart(newShoppingCart, result) { 

    let query = 'CALL shopping_cart_add_product(?, ?, ?)'
    
    new Connection().exec_query(query, [
        newShoppingCart.cart_id, 
        newShoppingCart.product_id, 
        newShoppingCart.attributes, 
    ], result);           
};
ShoppingCart.getShoppingCartProducts = function getShoppingCartProducts(ShoppingCartId, result) {

    let query = 'CALL shopping_cart_get_products(?)';

    new Connection().exec_query(query, [ShoppingCartId], result);   
};
ShoppingCart.remove = function(id, result){

    let query = 'CALL shopping_cart_remove_product(?)';

     new Connection().exec_query(query, [id], result); 
};

module.exports= ShoppingCart;