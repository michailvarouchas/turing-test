'user strict';
module.exports = function(app) {
  var departmentController = require('../controlers/DepartmentController');

  app.route('/departments')
  .get(departmentController.get_departments)
  .post(departmentController.add);

  app.route('/departments/:departmentId')
  .get(departmentController.get_department_details)
  .put(departmentController.update)
  .delete(departmentController.delete);

  app.route('/departments/categories/:departmentId')
  .get(departmentController.get_department_categories);

};