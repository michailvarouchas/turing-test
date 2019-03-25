module.exports = function(app) {
    app.use(function(err, req, res, next) {
        if(!err){
            return next();
        }
        if(err.status === 404)
            res.status(404).json({message: "Not found"});
        else {
            console.log(err);
            res.status(500).json(err);
        }
    });
};