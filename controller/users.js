let db = require('./../database/db');
let response = require('./../config/response');
const {bcrypt, salt} = require('./../config/bcrypt');

exports.getUser = (req, res) => {
    db.query("SELECT * FROM users", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            response.ok(rows, res);
        }
    })
}

exports.getUserById = (req, res) => {
    let id_user = req.params.id_user;
    db.query("SELECT * FROM users WHERE id=?", [id_user], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200);
            response.ok(rows, res);
        }
    })
}

exports.createUser = (req, res) => {
    let name = req.body.name,
        email = req.body.email,
        password = bcrypt.hashSync(req.body.password, salt);
    // res.json({
    //     name: name,
    //     email: email,
    //     password: password
    // })
    db.query("INSERT INTO users (name, email, password) VALUES(?,?,?)", [name, email, password], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201);
            response.ok("User berhasil didaftarkan", res);
        }
    });
}

exports.updateUser = (req, res) => {
    let id_user = req.body.id,
        name = req.body.name,
        email = req.body.email,
        password = bcrypt.hashSync(req.body.password, salt);
    
    db.query("UPDATE users SET name=?, email=?, password=? WHERE id=?", [name, email, password, id_user], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201);
            response.ok("User berhasil diperbarui", res);
        }
    })
}

exports.deleteUser = (req, res) => {
    let id_user = req.body.id;
    db.query("DELETE FROM users WHERE id=?", [id_user], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200);
            response.ok("User berhasil dihapus", res);
        }
    })
}