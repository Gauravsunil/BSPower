const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

var mysqlConnection = mysql.createPool({
    connectionLimit:100,
    host: 'Yajnaru.com',
    user: 'u627231354_BSPower',
    password: 'BSpower@980245',
    database: 'u627231354_BSPower',
    });

    mysqlConnection.getConnection((err,connection)=> {
        if(err)
        throw err;
        console.log('Database connected successfully');
        connection.release();
      });
        
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

app.get('/api/products' , (req, res) => {
    mysqlConnection.query('SELECT * FROM Products', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );