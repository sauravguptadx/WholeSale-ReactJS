const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/users/update', function(req, res) {
        const{username, name, password, address, isadmin, user_id} = req.query
        connection.query(`UPDATE wholesale.users SET username = '${username}', name = '${name}', password = '${password}', address = '${address}', isadmin = '${isadmin}' WHERE user_id = ${user_id}`, function(err, data){
            (err)?res.send(err):res.send("Successfully Updated the item")
        });
    });
};