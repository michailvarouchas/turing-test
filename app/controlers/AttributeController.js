'use strict';

var Attribute = require('../models/AttributeModel');

exports.add = function(req, res, next) {
    var new_Attribute = new Attribute(req.body);
    Attribute.add(new_Attribute, function(err, Attribute) {
        if (err){
          next(err);
        } else{
          res.json(Attribute);
        }
    });
};
exports.get_attribute_details = function(req, res, next) {
    Attribute.getAttributeDetails(req.params.attributeId, function(err, Attribute) {
        if (err){
            next(err);
        } else{
            res.json(Attribute);
        }
        
    });
};
exports.get_attributes = function(req, res, next) {
    Attribute.getAttributes(function(err, Attribute) {
        if (err){
            next(err);
        } else{
            res.json(Attribute);
        }
        
    });
};
exports.get_attributes_not_assigned_to_product = function(req, res, next) {
    Attribute.getAttributesNotAssignedToProduct(req.params.paroductId, function(err, Attribute) {
        if (err){
            next(err);
        } else{
            res.json(Attribute);
        }
        
    });
};
exports.update = function(req, res, next) {
    Attribute.update(req.params.attributeId, new Attribute(req.body), function(err, Attribute) {
        if (err){
            next(err);
        } else{
            res.json(Attribute);
        }
    });
};
exports.delete = function(req, res, next) {
  Attribute.remove(req.params.attributeId, function(err, response) {
    if (err){
      next(err);
    } else{
      res.json({ message: 'Attribute successfully deleted' });
    }
  });
};