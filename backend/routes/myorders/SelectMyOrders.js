const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/myorders/', function(req, res) {
        const{username} = req.query
        connection.query(`SELECT * FROM wholesale.orders WHERE username = '${username}'`, function(err, data){
            (err)?res.send(err):res.json({stock: data});
        });
    });
};