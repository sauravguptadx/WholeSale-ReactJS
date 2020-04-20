const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/placeorder', function(req, res) {
        const{username, stock_name, quantity_ordered, totalprice, date_of_delivery} = req.query
        connection.query(`INSERT INTO wholesale.orders (username, stock_name, quantity_ordered, totalprice, ispaid, pending, date_of_delivery) VALUES ('${username}', '${stock_name}', '${quantity_ordered}', '${totalprice}', 'No', '${totalprice}', '${date_of_delivery}')`, function(err, data){
            (err)?res.send(err):res.send("Successfully deleted the item")
        });
    });
};