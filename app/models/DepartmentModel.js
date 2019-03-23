'user strict';
var sql = require('./db.js');

//Department object constructor
var Department = function(Department){
    this.department_id = Department.department_id;
    this.name = Department.name;
    this.description = Department.description;
};
Department.add = function add(newDepartment, result) { 

    let query = 'CALL catalog_add_department(?, ?)'
    
    sql.query(query, [
        newDepartment.name, 
        newDepartment.description, 
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
Department.getDepartmentCategories = function getDepartmentCategories(DepartmentId, result) {

    let query = 'CALL catalog_get_department_categories(?)';

    sql.query(query, [DepartmentId], function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Department.getDepartmentDetails = function getDepartmentDetails(DepartmentId, result) {

    let query = 'CALL catalog_get_department_details(?)';

    sql.query(query, [DepartmentId], function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Department.getDepartments = function getDepartments(result) {

    let query = 'CALL catalog_get_departments()';

    sql.query(query, function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Department.update = function update(DepartmentId, department, result) {

    let query = 'CALL catalog_update_department(?, ?, ?)';

    sql.query(query, [DepartmentId, department.name, department.description], function (err, res) {             
            if(err) {
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};
Department.remove = function(id, result){

    let query = 'CALL catalog_delete_department(?)';

     sql.query(query, [id], function (err, res) {

                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports= Department;