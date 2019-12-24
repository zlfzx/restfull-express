'use strict'

exports.ok = (results, res) => {
    let data = {
        status: true,
        header_code: res.statusCode,
        data: results
    };
    res.json(data);
    res.end();
}