
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "sudoku_ranglista",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
