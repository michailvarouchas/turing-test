'use strict';

var Category = require('../models/CategoryModel');

exports.add = function(req, res, next) {
    var new_Category = new Category(req.body);
    Category.add(new_Category, function(err, Category) {
        if (err){
          next(err);
        } else{
          res.json(Category);
        }
    });
};
exports.get_category_products = function(req, res, next) {
  Category.getCategoryProducts(req.params.categoryId, function(err, Category) {
    if (err){
      next(err);
    } else{
      res.json(Category);
    }
    
  });
};
exports.get_categories = function(req, res, next) {
    Category.getCategories(function(err, Category) {
        if (err){
            next(err);
        } else{
            res.json(Category);
        }
        
    });
};
exports.get_category_details = function(req, res, next) {
    Category.getCategoryDetails(req.params.categoryId, function(err, Category) {
        if (err){
            next(err);
        } else{
            res.json(Category);
        }
        
    });
};
exports.update = function(req, res, next) {
    Category.update(req.params.categoryId, new Category(req.body), function(err, Category) {
        if (err){
            next(err);
        } else{
            res.json(Category);
        }
        
    });
};
exports.delete = function(req, res, next) {
  Category.remove(req.params.categoryId, function(err, response) {
    if (err){
      next(err);
    } else{
      res.json({ message: 'Category successfully deleted' });
    }
  });
};