const mysql = require('mysql');

module.exports = function(app,connection){

    app.get('/users/delete', function(req, res) {
        const{username} = req.query
        let queryy = connection.query(`DELETE FROM wholesale.users WHERE ( username = '${username}')`, function(err, data){
            (err)?res.send(err):res.send("Successfully deleted the item")
        });
    });
};