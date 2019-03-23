'user strict';
var sql = require('./db.js');

//Category object constructor
var Category = function(Category){
    this.category_id = Category.category_id;
    this.department_id = Category.department_id;
    this.name = Category.name;
    this.description = Category.description;
};
Category.add = function add(newCategory, result) { 

    let query = 'CALL catalog_add_category(?, ?, ?)'
    
    sql.query(query, [
        newCategory.department_id, 
        newCategory.name, 
        newCategory.description, 
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
Category.getCategoryProducts = function getCategoryProducts(CategoryId, result) {

    let query = 'CALL catalog_get_category_products(?)';

    sql.query(query, [CategoryId], function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Category.getCategories = function getCategories(result) {

    let query = 'CALL catalog_get_categories()';

    sql.query(query, function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Category.getCategoryDetails = function getCategoryDetails(CategoryId, result) {

    let query = 'CALL catalog_get_category_details(?)';

    sql.query(query, [CategoryId], function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Category.update = function update(CategoryId, category, result) {

    let query = 'CALL catalog_update_category(?, ?, ?)';

    sql.query(query, [CategoryId, category.name, category.description], function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Category.remove = function(id, result){

    let query = 'CALL catalog_delete_category(?)';

     sql.query(query, [id], function (err, res) {

                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports= Category;