'user strict';
var Connection = require('./db.js');

//Department object constructor
var Department = function(Department){
    this.department_id = Department.department_id;
    this.name = Department.name;
    this.description = Department.description;
};
Department.add = function add(newDepartment, result) { 

    let query = 'CALL catalog_add_department(?, ?)'
    
    new Connection().exec_query(query, [
        newDepartment.name, 
        newDepartment.description, 
    ], result);           
};
Department.getDepartmentCategories = function getDepartmentCategories(DepartmentId, result) {

    let query = 'CALL catalog_get_department_categories(?)';

    new Connection().exec_query(query, [DepartmentId], result);   
};
Department.getDepartmentDetails = function getDepartmentDetails(DepartmentId, result) {

    let query = 'CALL catalog_get_department_details(?)';

    new Connection().exec_query(query, [DepartmentId], result);   
};
Department.getDepartments = function getDepartments(result) {

    let query = 'CALL catalog_get_departments()';

    new Connection().exec_query(query, null, result);   
};
Department.update = function update(DepartmentId, department, result) {

    let query = 'CALL catalog_update_department(?, ?, ?)';

    new Connection().exec_query(query, [DepartmentId, department.name, department.description], result);   
};
Department.remove = function(id, result){

    let query = 'CALL catalog_delete_department(?)';

     new Connection().exec_query(query, [id], result); 
};

module.exports= Department;