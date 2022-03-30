const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get('/Ranglista4', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sudoku_ranglista'
    })
    
    connection.connect()
    
    connection.query('SELECT * from adatok WHERE adatok.meret = 4 order by adatok.ido asc', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
    

  })
  app.get('/Ranglista5', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sudoku_ranglista'
    })
    
    connection.connect()
    
    connection.query('SELECT * from adatok WHERE adatok.meret = 5 order by adatok.ido asc', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
    

  })
  app.get('/Ranglista6', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sudoku_ranglista'
    })
    
    connection.connect()
    
    connection.query('SELECT * from adatok WHERE adatok.meret = 6 order by adatok.ido asc', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
    

  })
  app.get('/Ranglista7', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sudoku_ranglista'
    })
    
    connection.connect()
    
    connection.query('SELECT * from adatok WHERE adatok.meret = 7 order by adatok.ido asc', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
    

  })
  app.get('/Ranglista8', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sudoku_ranglista'
    })
    
    connection.connect()
    
    connection.query('SELECT * from adatok WHERE adatok.meret = 8 order by adatok.ido asc', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
    

  })
  app.get('/Ranglista9', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sudoku_ranglista'
    })
    
    connection.connect()
    
    connection.query('SELECT * from adatok WHERE adatok.meret = 9 order by adatok.ido asc', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
    

  })
   app.get('/mindenadat', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sudoku_ranglista'
    })
    
    connection.connect()
    
    connection.query('SELECT * from adatok order by adatok.ido asc', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
    

  })
  app.post('/adattorles', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sudoku_ranglista'
    })
    
    connection.connect()
    connection.query("DELETE FROM adatok where id=" + req.body.bevitel1, function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikeres törlés!")
      res.send("Sikeres törlés!")
    })
    
    connection.end()
    

  })
  app.post('/idoadattorles', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'sudoku_ranglista'
    })
    
    connection.connect()
    connection.query("DELETE FROM adatok where datum >='" + req.body.bevitel1 + "' and datum<='" + req.body.bevitel2+"'", function (err, rows, fields) {
      if (err) throw err
    
      console.log("Sikeres törlés!")
      res.send("Sikeres törlés!")
    })
    
    connection.end()
    

  })
};
