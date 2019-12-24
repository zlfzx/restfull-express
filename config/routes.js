'use strict'

module.exports = (app) => {
    let users_con = require('./../controller/users')

    app.get('/users', users_con.getUser);
    app.get('/users/:id_user', users_con.getUserById);
    app.post('/users', users_con.createUser);
    app.put('/users', users_con.updateUser);
    app.delete('/users', users_con.deleteUser);
}