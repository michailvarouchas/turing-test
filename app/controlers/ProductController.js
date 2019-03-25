'use strict';
var Product = require('../models/ProductModel.js');

exports.list_all_Products = function(req, res, next) {
  Product.getAllProduct(req.params.offset, req.params.fetch, req.params.descriptionLength, function(err, Product) {
    if (err)
      next(err);
    else
      res.send(Product);
  });
};
exports.search_Products = function(req, res, next) {
  Product.searchProducts(req.params.search, req.params.offset, req.params.fetch, req.params.descriptionLength, req.params.on, function(err, Product) {
    if (err)
        next(err);
    else
      res.send(Product);
  });
};
exports.list_department_Products = function(req, res, next) {
  Product.getDepartmentProducts(req.params.departmentId, req.params.offset, req.params.fetch, req.params.descriptionLength, function(err, Product) {
    if (err)
      next(err);
    else
      res.send(Product);
  });
};
exports.list_category_Products = function(req, res, next) {
  Product.getCategoryProducts(req.params.categoryId, req.params.offset, req.params.fetch, req.params.descriptionLength, function(err, Product) {
    if (err)
      next(err);
    else
      res.send(Product);
  });
};
exports.create_a_Product = function(req, res, next) {
    var new_Product = new Product(req.body);
    Product.createProduct(new_Product, function(err, Product) {
        if (err)
            next(err);
        else
            res.json(Product);
    });
};
exports.read_a_Product = function(req, res, next) {
  Product.getProductInfo(req.params.productId, function(err, Product) {
    if (err)
      next(err);
    else
      res.json(Product);
  });
};
exports.update_a_Product = function(req, res, next) {
  Product.updateById(req.params.productId, new Product(req.body), function(err, Product) {
    if (err)
      next(err);
    else
      res.json(Product);
  });
};
exports.delete_a_Product = function(req, res) {
  Product.remove( req.params.productId, function(err) {
    if (err)
      next(err);
    else
      res.json({ message: 'Product successfully deleted' });
  });
};