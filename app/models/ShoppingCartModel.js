'user strict';
var sql = require('./db.js');

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
    
    sql.query(query, [
        newShoppingCart.cart_id, 
        newShoppingCart.product_id, 
        newShoppingCart.attributes, 
    ], 
        function (err, res) {
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });           
};
ShoppingCart.getShoppingCartProducts = function getShoppingCartProducts(ShoppingCartId, result) {

    let query = 'CALL shopping_cart_get_products(?)';

    sql.query(query, [ShoppingCartId], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
ShoppingCart.remove = function(id, result){

    let query = 'CALL shopping_cart_remove_product(?)';

     sql.query(query, [id], function (err, res) {

                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports= ShoppingCart;