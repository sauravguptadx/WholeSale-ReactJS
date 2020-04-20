const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/new', function(req, res) {
        connection.query('SELECT * FROM wholesale.new_table', function(err, data){
            (err)?res.send(err):res.json({stock: data});
        });
    });
};