const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");

app.get("/user", (req, res) => {
  console.log("Fetching user with id: ");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "s9393810",
    database: "user"
  });

  connection.query("select * from USER", (err, rows, fields) => {
    console.log("I think we fetch user successfully");
    res.json(rows);
  });
});
app.listen(port);
