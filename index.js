const express = require('express');
const { DBRef } = require('mongodb');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "financas"

})

app.get("/gastos", (req, res) => {
  const sql = "SELECT * FROM gastos";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.listen(5500, () => {
  console.log("deu certo!")
})

const inserir = "insert into gastos values(default,'2023-10-25',	'claudia','100',	'doação',	'especie',	   'outubro',	'2023');"

db.query(inserir, function (error) {
  if (error) {
    throw error;
  }
  else { console.log("dados inseridos corretamente") }

})

const ingastos = "select * from gastos";
db.query(ingastos, function (error, lista) {
  if (error) {
    throw error
  }
  else {
    console.log(lista)

  }
});



