const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/stock', function(req, res) {
        connection.query('SELECT * FROM wholesale.stock', function(err, data){
            (err)?res.send(err):res.json({stock: data});
        });
    });
};