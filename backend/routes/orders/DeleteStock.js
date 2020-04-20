const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/stock/delete', function(req, res) {
        const{name} = req.query
        let queryy = connection.query(`DELETE FROM wholesale.stock WHERE ( name = '${name}')`, function(err, data){
            (err)?res.send(err):res.send("Successfully deleted the item")
        });
    });
};