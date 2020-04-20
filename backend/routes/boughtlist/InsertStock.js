const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/stock/insert', function(req, res) {
        const{name, quantity_available, quantity_min, sp_pu, cp_pu} = req.query
        connection.query(`INSERT INTO wholesale.stock (name, quantity_available, quantity_min, sp_pu, cp_pu) VALUES ('${name}', '${quantity_available}', '${quantity_min}', '${sp_pu}', '${cp_pu}')`, function(err, data){
            (err)?res.send(err):res.send("Successfully deleted the item")
        });
    });
};