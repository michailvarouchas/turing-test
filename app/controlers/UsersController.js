const User = require('../models/UserModel');
//const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

//const saltRounds = 10;
//!!! db is column password is not designed to contain that long strings

module.exports = {
   create: function(req, res, next) {
      //let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
      User.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
         if (err) 
            next(err);
         else
            res.json({status: "success", message: "User added successfully!!!", data: null});
      });
   },
   authenticate: function(req, res, next) {
      User.findOne(req.body, function(err, userInfo){
         if (err) {
            next(err);
         } else {
            //if(userInfo.password && bcrypt.compareSync(req.body.password, userInfo.password)) {
            if(userInfo[0] && req.body.password === userInfo[0][0].password) {
               const token = jwt.sign({customer_id: userInfo.customer_id}, req.app.get('secretKey'), { expiresIn: '1h' });
               res.json({status:"success", message: "user found!!!", data:{user: userInfo[0], token:token}});
            } else {
               res.json({status:"error", message: "Invalid email/password!!!", data:null});
            }
         }
      });
   },
   updateAccount: function(req, res, next){
      User.updateAccount(req.body, function(err, userInfo){
         if(err){
            next(err);
         } else {
            res.json({status:"success", message: "user account updated", data:{user: userInfo }});
         }
      });
   },
   updateAddress: function(req, res, next){
      User.updateAddress(req.body, function(err, userInfo){
         if(err){
            next(err);
         } else {
            res.json({status:"success", message: "user address updated", data:{user: userInfo }});
         }
      })
   },
   updateCreditcard: function(req, res, next){
      User.updateCreditcard(req.body, function(err, userInfo){
         if(err){
            next(err);
         } else {
            res.json({status:"success", message: "user creditcard updated", data:{user: userInfo }});
         }
      })
   }
}