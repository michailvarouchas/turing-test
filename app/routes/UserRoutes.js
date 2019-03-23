'user strict';
module.exports = function(app) {
  var user = require('../controlers/UsersController');

  app.route('/register')
  .post(user.create);

  app.route('/authenticate')
  .post(user.authenticate);

};