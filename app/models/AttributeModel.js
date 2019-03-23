'user strict';
var sql = require('./db.js');

//Attribute object constructor
var Attribute = function(Attribute){
    this.attribute_id = Attribute.attribute_id;
    this.name = Attribute.name;
};
Attribute.add = function add(newAttribute, result) { 

    let query = 'CALL catalog_add_attribute(?)'
    
    sql.query(query, [
        newAttribute.name, 
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
Attribute.getAttributeDetails = function getAttributeDetails(AttributeId, result) {

    let query = 'CALL catalog_get_attribute_details(?)';

    sql.query(query, [AttributeId], function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Attribute.getAttributes = function getAttributes(result) {

    let query = 'CALL catalog_get_attributes()';

    sql.query(query, function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Attribute.getAttributesNotAssignedToProduct = function getAttributesNotAssignedToProduct(productId, result) {

    let query = 'CALL catalog_get_attributes_not_assigned_to_product(?)';

    sql.query(query, [productId], function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Attribute.update = function update(attributeId, attribute, result) {

    let query = 'CALL catalog_update_attribute(?, ?)';

    sql.query(query, [attributeId, attribute.name], function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Attribute.remove = function(id, result){

    let query = 'CALL catalog_delete_attribute(?)';

     sql.query(query, [id], function (err, res) {

                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports= Attribute;