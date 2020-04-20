const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/stock/signup', function(req, res) {
        const{name, username, password, address} = req.query
        connection.query(`INSERT INTO wholesale.users (name, username, password, address) VALUES ('${name}', '${username}', '${password}', '${address}')`, function(err, data){
            (err)?res.send(err):res.send("Successfully deleted the item")
        });
    });
};