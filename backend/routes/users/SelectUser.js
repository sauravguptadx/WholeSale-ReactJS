const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/users', function(req, res) {
        connection.query('SELECT * FROM wholesale.users', function(err, data){
            (err)?res.send(err):res.json({stock: data});
        });
    });
};