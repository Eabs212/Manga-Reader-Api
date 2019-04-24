const db = require('./db');
const bcrypt = require('bcryptjs');
const sql = require('./queries.js');

module.exports.getAllManga = () => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.any(sql.general.getManga)
                .then((data) => {
                    console.log(data);
                    res({
                        message: "Get data item succesfully",
                        status: 200,
                        data: data
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

module.exports.getMangaId = (mangaId) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.one(sql.general.getMangaId, [mangaId])
            .then((data) => {
                console.log(data);
                res({
                    message: "Get data item succesfully",
                    status: 200,
                    data: data
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

module.exports.addManga = (manga) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.none(sql.general.newManga, [manga.user_id, manga.manga_name, manga.manga_synopsis, manga.manga_status])
                .then(() => {
                    res({
                        message: "Item data succesfully created",
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
module.exports.updateManga = (manga) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.none(sql.general.updateManga, [manga.manga_name, manga.manga_synopsis, manga.manga_id])
                .then(() => {
                    res({
                        msg: 'OK. Updated',
                        status: 200
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
module.exports.deleteManga = (mangaId) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.none(sql.general.deleteManga, [mangaId])
                .then(() => {
                    res({
                        message: "OK. Deleted",
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