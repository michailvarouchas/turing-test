'use strict';
var paypal = require('paypal-rest-sdk');
var paymentModel = require('../models/PaypalModels/CreatePaymentModel')

paypal.configure({
    'mode': process.env.PAYPAL_MODE, //sandbox or live
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET
  });

exports.create_paypal_payment = function(req, res) {
    let model = paymentModel.create_payment(req.body.intent, req.body.method, req.body.currency, req.body.description, req.body.total, req.body.items)
    paypal.payment.create(JSON.stringify(model), function (error, payment) {
        if (error) {
            res.statusCode = error.httpStatusCode;
            res.send(error);
        } else {            
            payment.links.forEach(function(link){
                if(link.rel === "approval_url")
                    res.redirect(link);
            });
        }
    });
};
//paypal uses this endpoint
exports.execute_paypal_payment = function(req, res){

    var paymentId = req.query.paymentId;
    var payerId = { payer_id: req.query.PayerID };
    
    paypal.payment.execute(paymentId, payerId, function(error, payment){
        if (error) {
            res.send(error);
        } else {
            res.redirect('http://myfrontendapp.com/payment/success');
        }
    });
}
exports.canceled = function(req, res){
    res.redirect('http://myfrontendapp.com/payment/failed');
}