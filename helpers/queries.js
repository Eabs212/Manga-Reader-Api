const PS = require('pg-promise').PreparedStatement;
let queries = {
    general: {
        newUser: new PS('new-user', "INSERT INTO users (type_id, user_password, user_username, user_name, user_creation_time, user_email) VALUES (1, $1, $2, $3, now(), $4)"),
    }
}

module.exports = queries;