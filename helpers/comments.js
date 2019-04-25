const db = require('./db');
const bcrypt = require('bcryptjs');
const sql = require('./queries.js');

module.exports.addCommentManga = (data) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            console.log(data)
            obj.none(sql.general.newCommentManga, [data.user_id, data.manga_id, data.comment_content])
                .then(() => {
                    res({
                        message: "succesfully",
                        status: 200,
                    });
                    obj.done();
                }).catch((error) => {
                    rej({
                        error: error,
                        msg: 'Error',
                        status: 500
                    });
                    obj.done();
                });
        }).catch((error) => {
            console.log(error);
            rej(error);
        });;
    });
};

module.exports.addCommentChapter = (data) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.none(sql.general.newCommentChapter, [data.user_id, data.chapter_id, data.comment_content])
                .then(() => {
                    res({
                        message: "succesfully",
                        status: 200,
                        data: true
                    });
                    obj.done();
                }).catch((error) => {
                    rej({
                        error: error,
                        msg: 'Error',
                        status: 500
                    });
                    obj.done();
                });
        }).catch((error) => {
            console.log(error);
            rej(error);
        });;
    });
};

module.exports.deleteCommentManga = (data) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.result(sql.general.deleteMangaComment, [data.user_id, data.manga_id, data.comment_id])
                .then((result) => {
                    if(result.rowCount > 0){
                    res({
                        message: "succesfully",
                        status: 200,
                        data:true
                    });
                }else{
                    res({
                    message: "Error",
                    status: 200,
                    data:false
                });
                }
                    obj.done();
                }).catch((error) => {
                    rej({
                        error: error,
                        msg: 'Error',
                        status: 500
                    });
                    obj.done();
                });
        }).catch((error) => {
            console.log(error);
            rej(error);
        });;
    });
};

module.exports.deleteCommentChapter = (data) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            console.log(data)
            obj.result(sql.general.deleteChapterComment, [data.user_id, data.chapter_id, data.comment_id])
                .then((result) => {
                    if(result.rowCount > 0){
                    res({
                        message: "succesfully",
                        status: 200,
                        data:true
                    });
                }else{
                    res({
                    message: "Error",
                    status: 200,
                    data:false
                });
                }
                    obj.done();
                }).catch((error) => {
                    rej({
                        error: error,
                        msg: 'Error',
                        status: 500
                    });
                    obj.done();
                });
        }).catch((error) => {
            console.log(error);
            rej(error);
        });;
    });
};