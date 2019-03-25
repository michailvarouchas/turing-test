'user strict';

var mysql = require('mysql');

const mysql_pool = mysql.createPool({
    connectionLimit : process.env.DB_CONNECTION_LIMIT,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASSWORD,
    database        : process.env.DB_DATABASE
});

class Connection{
    constructor(){
    }
    exec_query(query, params, result){
        mysql_pool.getConnection(function(connErr, conn) {
            if(connErr){
                result(connErr, null);
            } else {
                conn.query(query, params, function (err, res) {
                    if(err) {
                        result(err, null);
                    }
                    else{
                        result(null, res);
                    }
                    conn.release();
                });
            }
        });
    }
}

module.exports = Connection;