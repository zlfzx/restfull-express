const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

exports.bcrypt = bcrypt;
exports.salt = salt