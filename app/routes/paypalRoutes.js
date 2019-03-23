'user strict';
module.exports = function(app) {
  var paypalController = require('../controlers/PaypalController');

  app.route('paypal/pay')
  .post(paypalController.create_paypal_payment);

  app.route('paypal/exec_payment')
  .get(paypalController.execute_paypal_payment);

  app.route('paypal/canceled')
  .get(paypalController.canceled);
};