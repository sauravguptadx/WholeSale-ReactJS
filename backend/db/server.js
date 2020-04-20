
const express = require('express');

const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'wholesale'
});

connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
});


require("../routes/registration/Login")(app, connection);
require("../routes/registration/SignUp")(app, connection);


require('../routes/stock/SelectStock')(app, connection); 
require("../routes/stock/InsertStock")(app, connection);
require('../routes/stock/UpdateStock')(app, connection); 
require("../routes/stock/DeleteStock")(app, connection);


require('../routes/users/SelectUser')(app, connection); 
require('../routes/users/UpdateUser')(app, connection); 
require("../routes/users/DeleteUser")(app, connection);

require("../routes/users/InsertStock")(app, connection);

require("../routes/myorders/SelectMyOrders")(app, connection);
require("../routes/myorders/InsertPlaceOrder")(app, connection);

app.listen(PORT, () => {
    console.log('App running on port' + PORT);
});