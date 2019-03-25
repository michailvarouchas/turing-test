'user strict';
var Connection = require('./db.js');

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
    new Connection().exec_query(query, [newProduct.categoryId, newProduct.name, newProduct.description, newProduct.price], result);         
};
Product.getProductInfo = function (ProductId, result) {

    let query = 'CALL catalog_get_product_details(?)';
    new Connection().exec_query(query, [ProductId], result); 
};
Product.getCategoryProducts = function (categoryId, offset = 0, fetch = 30, descriptionLength = 1000, result) {        

    let query = 'CALL catalog_get_products_in_category(?, ?, ?, ?)';
    new Connection().exec_query(query, [categoryId, descriptionLength, fetch, offset], result);
};
Product.getDepartmentProducts = function (departmentId, offset = 0, fetch = 30, descriptionLength = 1000, result) {        

    let query = 'CALL catalog_get_products_on_department(?, ?, ?, ?)';
    new Connection().exec_query(query, [departmentId, descriptionLength, fetch, offset], result);
};
Product.getAllProduct = function (offset = 0, fetch = 30, descriptionLength = 1000, result) {        

        let query = 'CALL catalog_get_products_on_catalog(?, ?, ?)';
        new Connection().exec_query(query, [descriptionLength, fetch, offset], result);
};
Product.searchProducts = function (search, offset = 0, fetch = 30, descriptionLength = 1000, on = 'on', result) {        
    
    let query = 'CALL catalog_search(?, ?, ?, ?, ?)';
    new Connection().exec_query(query, [search, on, descriptionLength, fetch, offset], result);  
};
Product.updateById = function(id, product, result){

    let query = 'CALL catalog_update_product(?, ?, ?, ?, ?)';
    new Connection().exec_query(query, [id, product.name, product.description, product.price, product.discounted_price], result);
};
Product.remove = function(id, result){

    let query = 'CALL catalog_delete_product(?)';
    new Connection().exec_query(query, [id], result);
};

module.exports= Product;