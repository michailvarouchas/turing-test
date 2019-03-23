'use strict';

var Department = require('../models/DepartmentModel');

exports.add = function(req, res) {
    var new_Department = new Department(req.body);
    Department.add(new_Department, function(err, Department) {
        if (err){
          res.status(400).send(err);
        } else{
          res.json(Department);
        }
    });
};
exports.get_department_categories = function(req, res) {
  Department.getDepartmentCategories(req.params.departmentId, function(err, categories) {
    if (err){
      res.status(400).send(err);
    } else{
      res.json(categories);
    }
    
  });
};
exports.get_department_details = function(req, res) {
    Department.getDepartmentDetails(req.params.departmentId, function(err, Department) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Department);
        }
        
    });
};
exports.get_departments = function(req, res) {
    Department.getDepartments(function(err, Department) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Department);
        }
        
    });
};
exports.update = function(req, res) {
    Department.update(req.params.departmentId, new Department(req.body), function(err, Department) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Department);
        }
        
    });
};
exports.delete = function(req, res) {
  Department.remove(req.params.departmentId, function(err, response) {
    if (err){
      res.status(400).send(err);
    } else{
      res.json({ message: 'Department successfully deleted' });
    }
  });
};