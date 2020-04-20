const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/stock/login', function(req, res) {
        const{username, password} = req.query
        connection.query( `SELECT * FROM wholesale.users WHERE ( username = '${username}' AND password = '${password}' )`, function(err, data){
            (err)?res.send(err):res.json({stock: data});
        });
    });
};