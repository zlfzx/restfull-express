let mysql = require('mysql');

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "latihan"
})

db.connect((err) => {
     if (err) throw err;
     console.log('Koneks MySQL OK!')
})

module.exports = db;