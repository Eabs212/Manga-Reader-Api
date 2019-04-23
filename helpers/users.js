const db = require('./db');
const sql = require('./queries.js');


module.exports.registerUser = (username, password, name, email) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.none(sql.general.newUser, [password, username, name, email])
                .then(() => {
                    res({
                        message: "OK",
                        status: 200
                    });
                    obj.done();
                }).catch((error) => {
                    rej({
                        error: error,
                        msg: 'not Created',
                        status: 500
                    });
                    obj.done();
                });
        });
    });
};