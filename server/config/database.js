const db = require("mysql2");
// import { configData, mode } from "../helpeer/config.js";
const configFile = require("../config/config");
let myDB = "";

if (configFile.mode === "devlopment") {
  myDB = db.createPool({
    host: "localhost",
    database: "biqala",
    user: "root",
    password: "Leno_1972",
  });
}

if (configFile.mode === "production") {
  myDB = db.createPool({
    host: "us-cdbr-east-05.cleardb.net",
    database: "heroku_eaa8275903daac8",
    user: "b439f2e618e26d",
    password: "a68ca059",
  });
}

module.exports = { myDB };
