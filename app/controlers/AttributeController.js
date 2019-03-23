'use strict';

var Attribute = require('../models/AttributeModel');

exports.add = function(req, res) {
    var new_Attribute = new Attribute(req.body);
    Attribute.add(new_Attribute, function(err, Attribute) {
        if (err){
          res.status(400).send(err);
        } else{
          res.json(Attribute);
        }
    });
};
exports.get_attribute_details = function(req, res) {
    Attribute.getAttributeDetails(req.params.attributeId, function(err, Attribute) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Attribute);
        }
        
    });
};
exports.get_attributes = function(req, res) {
    Attribute.getAttributes(function(err, Attribute) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Attribute);
        }
        
    });
};
exports.get_attributes_not_assigned_to_product = function(req, res) {
    Attribute.getAttributesNotAssignedToProduct(req.params.paroductId, function(err, Attribute) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Attribute);
        }
        
    });
};
exports.update = function(req, res) {
    Attribute.update(req.params.attributeId, new Attribute(req.body), function(err, Attribute) {
        if (err){
            res.status(400).send(err);
        } else{
            res.json(Attribute);
        }
    });
};
exports.delete = function(req, res) {
  Attribute.remove(req.params.attributeId, function(err, response) {
    if (err){
      res.status(400).send(err);
    } else{
      res.json({ message: 'Attribute successfully deleted' });
    }
  });
};