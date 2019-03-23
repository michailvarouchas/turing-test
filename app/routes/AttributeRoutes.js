'user strict';
module.exports = function(app) {
  var attributeController = require('../controlers/AttributeController');

  app.route('/attributes')
  .get(attributeController.get_attributes)
  .post(attributeController.add);

  app.route('/attributes/:attributeId')
  .get(attributeController.get_attribute_details)
  .put(attributeController.update)
  .delete(attributeController.delete);

  app.route('/attributes/notassigned/:productId')
  .get(attributeController.get_attributes_not_assigned_to_product);
};