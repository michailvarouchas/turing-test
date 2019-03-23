const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    if(!req.headers.authorization)
        res.send({ error: 401, message: "Token not found on request headers."});

    let token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, req.app.get('secretKey'), function(err, decoded) {
        if (err) {
            res.json({status:"error", message: err.message, data: null});
        }else{
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });
}
