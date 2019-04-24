const PS = require('pg-promise').PreparedStatement;
let queries = {
    general: {
        newUser: new PS('new-user', "INSERT INTO users (type_id, user_password, user_username, user_name, user_creation_time, user_email) VALUES (1, $1, $2, $3, now(), $4)"),
        getUser: new PS('get-user', "SELECT * FROM users WHERE user_username = $1"),
        getManga: new PS('get-manga',"SELECT * FROM manga"),
        getMangaId: new PS('get-manga-id', "SELECT * FROM manga WHERE manga_id = $1"),
        newManga: new PS('new-manga', "INSERT INTO manga (user_id, manga_name, manga_synopsis, manga_status, manga_creation_time) VALUES ($1, $2, $3, $4, now())"),
        updateManga: new PS('update-manga',"UPDATE manga SET manga_name = $1, manga_synopsis = $2 WHERE manga_id = $3"),
        deleteManga: new PS('delete-manga', "DELETE FROM manga WHERE manga_id = $1"),
    }
}

module.exports = queries;