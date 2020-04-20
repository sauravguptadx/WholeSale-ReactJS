const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/stock/update', function(req, res) {
        const{name, quantity_available, quantity_min, sp_pu, cp_pu, stock_id} = req.query
        connection.query(`UPDATE wholesale.stock SET name = '${name}', quantity_available = '${quantity_available}', quantity_min = '${quantity_min}', sp_pu = '${sp_pu}', cp_pu = '${cp_pu}' WHERE stock_id = ${stock_id}`, function(err, data){
            (err)?res.send(err):res.send("Successfully updated the item")
        });
    });
};