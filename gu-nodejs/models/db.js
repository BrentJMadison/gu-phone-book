const mysql = require("mysql");
const dbConfig = require("../db.config.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

let createTable = `create table if not exists phone_book_line(
  id int primary key auto_increment,
  firstName varchar(55) default null,
  lastName varchar(55) default null,
  phoneNumber varchar(55) default null
)`;

connection.query(createTable, function (err, results, fields) {
  if (err) {
    console.log(err.message);
  }
});

module.exports = connection;
