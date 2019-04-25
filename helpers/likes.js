const db = require('./db');
const bcrypt = require('bcryptjs');
const sql = require('./queries.js');

module.exports.likeManga = (data) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
                        console.log(data)
            obj.none(sql.general.likeManga, [data.user_id, data.manga_id])
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
module.exports.likeChapter = (data) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
                        console.log(data)
            obj.none(sql.general.likeChapter, [data.user_id, data.chapter_id])
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


module.exports.dislikeManga = (data) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.result(sql.general.dislikeManga, [data.user_id, data.manga_id])
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

module.exports.dislikeChapter = (data) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            console.log(data)
            obj.result(sql.general.dislikeChapter, [data.user_id, data.chapter_id])
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