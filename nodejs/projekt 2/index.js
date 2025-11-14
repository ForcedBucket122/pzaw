const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database: 'mydb'
});

con.connect(function(err) {
  if (err) throw err;
  let sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});