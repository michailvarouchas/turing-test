'use strict';

var Department = require('../models/DepartmentModel');

exports.add = function(req, res, next) {
    var new_Department = new Department(req.body);
    Department.add(new_Department, function(err, Department) {
        if (err){
          next(err);
        } else{
          res.json(Department);
        }
    });
};
exports.get_department_categories = function(req, res, next) {
  Department.getDepartmentCategories(req.params.departmentId, function(err, categories) {
    if (err){
      next(err);
    } else{
      res.json(categories);
    }
    
  });
};
exports.get_department_details = function(req, res, next) {
    Department.getDepartmentDetails(req.params.departmentId, function(err, Department) {
        if (err){
            next(err);
        } else{
            res.json(Department);
        }
        
    });
};
exports.get_departments = function(req, res, next) {
    Department.getDepartments(function(err, Department) {
        if (err){
            next(err);
        } else{
            res.json(Department);
        }
        
    });
};
exports.update = function(req, res, next) {
    Department.update(req.params.departmentId, new Department(req.body), function(err, Department) {
        if (err){
            next(err);
        } else{
            res.json(Department);
        }
        
    });
};
exports.delete = function(req, res, next) {
  Department.remove(req.params.departmentId, function(err, response) {
    if (err){
      next(err);
    } else{
      res.json({ message: 'Department successfully deleted' });
    }
  });
};