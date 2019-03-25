'user strict';
var Connection = require('./db.js');

//Attribute object constructor
var Attribute = function(Attribute){
    this.attribute_id = Attribute.attribute_id;
    this.name = Attribute.name;
};
Attribute.add = function add(newAttribute, result) { 

    let query = 'CALL catalog_add_attribute(?)'
    
    new Connection().exec_query(query, [
        newAttribute.name, 
    ], result);           
};
Attribute.getAttributeDetails = function getAttributeDetails(AttributeId, result) {

    let query = 'CALL catalog_get_attribute_details(?)';

    new Connection().exec_query(query, [AttributeId], result);   
};
Attribute.getAttributes = function getAttributes(result) {

    let query = 'CALL catalog_get_attributes()';

    new Connection().exec_query(query, null, result);   
};
Attribute.getAttributesNotAssignedToProduct = function getAttributesNotAssignedToProduct(productId, result) {

    let query = 'CALL catalog_get_attributes_not_assigned_to_product(?)';

    new Connection().exec_query(query, [productId], result);   
};
Attribute.update = function update(attributeId, attribute, result) {

    let query = 'CALL catalog_update_attribute(?, ?)';

    new Connection().exec_query(query, [attributeId, attribute.name], result);   
};
Attribute.remove = function(id, result){

    let query = 'CALL catalog_delete_attribute(?)';

    new Connection().exec_query(query, [id], result); 
};

module.exports= Attribute;