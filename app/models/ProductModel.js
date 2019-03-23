'user strict';
var sql = require('./db.js');

//Product object constructor
var Product = function(Product){
    this.categoryId = Product.categoryId;
    this.product_id = Product.product_id;
    this.name = Product.name;
    this.description = Product.description;
    this.price = Product.price;
    this.discounted_price = Product.discounted_price;
    this.image = Product.image;
    this.image_2 = Product.image_2;
    this.thumbnail = Product.thumbnail;
    this.display = Product.display;
};
Product.createProduct = function (newProduct, result) {   
    
    let query = "CALL catalog_add_product_to_category(?, ?, ?, ?)"
    
    sql.query(query, [newProduct.categoryId, newProduct.name, newProduct.description, newProduct.price], function (err, res) {
            
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    });           
};
Product.getProductInfo = function (ProductId, result) {

    let query = 'CALL catalog_get_product_details(?)';

    sql.query(query, [ProductId], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Product.getCategoryProducts = function (categoryId, offset = 0, fetch = 30, descriptionLength = 1000, result) {        

    let query = 'CALL catalog_get_products_in_category(?, ?, ?, ?)';

    sql.query(query, [categoryId, descriptionLength, fetch, offset], function (err, res) {

            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Product.getDepartmentProducts = function (departmentId, offset = 0, fetch = 30, descriptionLength = 1000, result) {        

    let query = 'CALL catalog_get_products_on_department(?, ?, ?, ?)';

    sql.query(query, [departmentId, descriptionLength, fetch, offset], function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
              console.log('Products : ', res);  

             result(null, res);
            }
        });   
};
Product.getAllProduct = function (offset = 0, fetch = 30, descriptionLength = 1000, result) {        

        let query = 'CALL catalog_get_products_on_catalog(?, ?, ?)';
        sql.query(query, [descriptionLength, fetch, offset], function (err, res) {

                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });   
};
Product.searchProducts = function (search, offset = 0, fetch = 30, descriptionLength = 1000, on = 'on', result) {        
    
    let query = 'CALL catalog_search(?, ?, ?, ?, ?)';
    sql.query(query, [search, on, descriptionLength, fetch, offset], function (err, res) {

            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Product.updateById = function(id, product, result){

    let query = 'CALL catalog_update_product(?, ?, ?, ?, ?)';

    sql.query(query, [id, product.name, product.description, product.price, product.discounted_price], function (err, res) {
            if(err) {
                result(err, null);
            }
            else{   
                result(null, res);
            }
        }); 
};
Product.remove = function(id, result){

    let query = 'CALL catalog_delete_product(?)';

     sql.query(query, [id], function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Product;