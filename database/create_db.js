let mysql = require('mysql');

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

db.connect((err) => {
    if (err) {
        throw err;
    }
})

db.query("CREATE DATABASE IF NOT EXISTS latihan", (error, results) => {
    if (error) {
        throw error;
    }
    console.log(results)
})

db.end((err) => {
    if (err) {
        throw err;
    }
    console.log("Koneksi ditutup")
})