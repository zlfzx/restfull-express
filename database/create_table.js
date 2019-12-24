let db = require('./db');

let table_user = `
CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(64),
	PRIMARY KEY (id)
);`;
db.query(table_user, (err, results) => {
    if (err) {
        throw err;
    }
    console.log(results);
});

db.end((err) => {
    if (err) {
        throw err;
    }
    console.log("Koneksi Ditutup!")
})