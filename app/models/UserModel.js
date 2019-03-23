'user strict';
var sql = require('./db.js');

//Customer object constructor
var Customer = function(Customer){
    this.name = Customer.name;
    this.email = Customer.email;
    this.password = Customer.password;
    this.credit_card = Customer.credit_card;
    this.address_1 = Customer.address_1;
    this.address_2 = Customer.address_2;
    this.city = Customer.city;
    this.region = Customer.region;
    this.postal_code = Customer.postal_code;
    this.country = Customer.country;
    this.shipping_region_id = Customer.shipping_region_id;
    this.day_phone = Customer.day_phone;
    this.eve_phone = Customer.eve_phone;
    this.mob_phone = Customer.mob_phone;
};
Customer.create = function(newCustomer, result){

    let query = 'CALL customer_add(?, ?, ?)';

    sql.query(query, [newCustomer.name, newCustomer.email, newCustomer.password], function (err, res) {
            
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    }); 
}
Customer.findOne = function(body, result){

    let query = "CALL customer_get_login_info(?)";

    sql.query(query, body.email, function (err, res) {
            
        if(err) {
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res);
        }
    }); 
}
Customer.updateAccount = function(body, result){
    
    let query = "CALL customer_update_account(?, ?, ?, ?, ?, ?, ?)";

    sql.query(query, [
        body.customer_id, 
        body.name, 
        body.email, 
        body.password, 
        body.day_phone, 
        body.eve_phone, 
        body.mob_phone
    ], function (err, res) {
            
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    }); 
}
Customer.updateAddress = function(body, result){
    
    let query = "CALL customer_update_address(?, ?, ?, ?, ?, ?, ?, ?)";

    sql.query(query, [
        body.customer_id, 
        body.address_1, 
        body.address_2, 
        body.city, 
        body.region, 
        body.postal_code, 
        body.country,
        body.shipping_region_id
    ], function (err, res) {
            
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    }); 
}
Customer.updateCreditcard = function(body, result){
    
    let query = "CALL customer_update_credit_card(?, ?)";

    sql.query(query, [
        body.customer_id, 
        body.credit_card 
    ], function (err, res) {
            
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    }); 
}
module.exports= Customer;