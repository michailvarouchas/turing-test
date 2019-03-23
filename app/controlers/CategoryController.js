'use strict';

var Category = require('../models/CategoryModel');

exports.add = function(req, res) {
    var new_Category = new Category(req.body);
    Category.add(new_Category, function(err, Category) {
        if (err){
          res.status(400).send(err);
        } else{
          res.json(Category);
        }
    });
};
exports.get_category_products = function(req, res) {
  Category.getCategoryProducts(req.params.categoryId, function(err, Category) {
    if (err){
      res.status(400).send(err);
    } else{
      res.json(Category);
    }
    
  });
};
exports.get_categories = function(req, res) {
    Category.getCategories(function(err, Category) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Category);
        }
        
    });
};
exports.get_category_details = function(req, res) {
    Category.getCategoryDetails(req.params.categoryId, function(err, Category) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Category);
        }
        
    });
};
exports.update = function(req, res) {
    Category.update(req.params.categoryId, new Category(req.body), function(err, Category) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Category);
        }
        
    });
};
exports.delete = function(req, res) {
  Category.remove(req.params.categoryId, function(err, response) {
    if (err){
      res.status(400).send(err);
    } else{
      res.json({ message: 'Category successfully deleted' });
    }
  });
};