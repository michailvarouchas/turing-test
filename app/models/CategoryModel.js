'user strict';
var Connection = require('./db.js');

//Category object constructor
var Category = function(Category){
    this.category_id = Category.category_id;
    this.department_id = Category.department_id;
    this.name = Category.name;
    this.description = Category.description;
};
Category.add = function add(newCategory, result) { 

    let query = 'CALL catalog_add_category(?, ?, ?)'
    
    new Connection().exec_query(query, [
        newCategory.department_id, 
        newCategory.name, 
        newCategory.description, 
    ], result);           
};
Category.getCategoryProducts = function getCategoryProducts(CategoryId, result) {

    let query = 'CALL catalog_get_category_products(?)';

    new Connection().exec_query(query, [CategoryId], result);   
};
Category.getCategories = function getCategories(result) {

    let query = 'CALL catalog_get_categories()';

    new Connection().exec_query(query, null, result);   
};
Category.getCategoryDetails = function getCategoryDetails(CategoryId, result) {

    let query = 'CALL catalog_get_category_details(?)';

    new Connection().exec_query(query, [CategoryId], result);   
};
Category.update = function update(CategoryId, category, result) {

    let query = 'CALL catalog_update_category(?, ?, ?)';

    new Connection().exec_query(query, [CategoryId, category.name, category.description], result);   
};
Category.remove = function(id, result){

    let query = 'CALL catalog_delete_category(?)';

     new Connection().exec_query(query, [id], result); 
};

module.exports= Category;