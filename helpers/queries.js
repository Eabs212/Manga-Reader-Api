const PS = require('pg-promise').PreparedStatement;
let queries = {
    general: {
        newUser: new PS('new-user', "INSERT INTO users (type_id, user_password, user_username, user_name, user_creation_time, user_email) VALUES (1, $1, $2, $3, now(), $4)"),
        getUser: new PS('get-user', "SELECT * FROM users WHERE user_username = $1"),
        getManga: new PS('get-manga',"SELECT * FROM manga"),
        getMangaId: new PS('get-manga-id', "SELECT * FROM manga WHERE manga_id = $1"),
        newManga: new PS('new-manga', "INSERT INTO manga (user_id, manga_name, manga_synopsis, manga_status, manga_creation_time) VALUES ($1, $2, $3, $4, now())"),
        updateManga: new PS('update-manga',"UPDATE manga SET manga_name = $1, manga_synopsis = $2 WHERE manga_id = $3 AND user_id = $4"),
        deleteManga: new PS('delete-manga', "DELETE FROM manga WHERE manga_id = $1"),
        newChapter: new PS('new-chapter',"INSERT INTO chapters (manga_id, chapter_number, chapter_title, chapter_creation_time, chapter_location, chapter_num_pages) VALUES ($1, $2, $3, now(), $4, 0)"),
        getChapter: new PS('get-chapter', "SELECT * FROM chapters WHERE manga_id = $1"),
        newCommentManga: new PS('new-comment-manga', "INSERT INTO comments_manga (user_id, manga_id, comment_content, comment_creation_time) VALUES ($1, $2, $3, now())"),
        newCommentChapter: new PS('new-comment-manga', "INSERT INTO comments_manga (user_id, chapter_id, comment_content, comment_creation_time) VALUES ($1, $2, $3, now())"),
        getCommentsManga: new PS('get-comments-manga', "SELECT * FROM comments_manga WHERE manga_id = $1"),
        getCommentsChapter: new PS('get-comments-chapter', "SELECT * FROM comments_chapter WHERE chapter_id = $1"),
        likeManga: new PS('like-manga', "INSERT INTO likes_manga (user_id, manga_id) VALUES ($1, $2)"),
        likeChapter: new PS('like-chapter', "INSERT INTO likes_chapter (user_id, chapter_id) VALUES ($1, $2)"),        
        getLikesManga: new PS('get-likes-manga', "SELECT COUNT(*) FROM likes_manga WHERE manga_id = $1"),
        dislikeManga: new PS('dislike-manga', "DELETE FROM likes_manga WHERE user_id = $1 AND manga_id = $2"),
        dislikeManga: new PS('dislike-chapter', "DELETE FROM likes_chapter WHERE user_id = $1 AND chapter_id = $2"),        
        deleteChapter: new PS('delete-chapter', "DELETE FROM chapters WHERE manga_id = $1 AND chapter_id = $2"),
        getLikesChapter: new PS('get-likes-chapter', "SELECT COUNT(*) FROM likes_chapter WHERE chapter_id = $1"),
        getChapterManga: new PS('get-chapter-manga',"SELECT * FROM chapters WHERE chapter_id = $1 AND manga_id = $2 "),
    }
}

module.exports = queries;