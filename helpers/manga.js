const db = require('./db');
const bcrypt = require('bcryptjs');
const sql = require('./queries.js');

module.exports.getAllManga = () => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.any(sql.general.getManga )
                .then((data) => {
                    console.log(data);
                    res({
                        message: "Get data succesfully",
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
            db.task(async t => {

            console.log(mangaId)
             const manga = await obj.one(sql.general.getMangaId, [mangaId]);
             const mangac = await obj.any(sql.general.getChapter, [mangaId]);
             const manga_comments = await obj.any(sql.general.getCommentsManga, [mangaId]);
             const manga_likes = await obj.one(sql.general.getLikesManga, [mangaId]);
             manga.likes = manga_likes.count; 
             manga.comments = manga_comments; 
             manga.chapter = mangac;
             return manga;
            })
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
            console.log(manga)
            obj.none(sql.general.newManga, [manga.user_id, manga.manga_name, manga.manga_synopsis, manga.manga_status])
                .then(() => {
                    res({
                        message: "succesfully created",
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
module.exports.addChapter = (chapter) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            console.log(chapter)
            obj.none(sql.general.newChapter, [chapter.manga_id, chapter.chapter_number, chapter.chapter_title, chapter.chapter_location])
                .then(() => {
                    res({
                        message: "Item data succesfully created",
                        status: 200,
                    });
                    obj.done();
                }).catch((error) => {
                    console.log(error)
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
        console.log(manga)

            obj.none(sql.general.updateManga, [manga.manga_name, manga.manga_synopsis, manga.manga_id, manga.user_id])
                .then(() => {
                    res({
                        msg: 'OK. Updated',
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
module.exports.deleteManga = (mangaId) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.result(sql.general.deleteManga, [mangaId])
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
                });
        }).catch((error) => {
            console.log(error);
            rej(error);
        });;
    });
};
module.exports.getChapter = (chapter) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            db.task(async t => {

                console.log(chapter)
                 const mangac = await obj.one(sql.general.getChapterManga, [ chapter.chapter_id, chapter.manga_id]);
                 const manga_comments_chapter = await obj.any(sql.general.getCommentsChapter, [chapter.chapter_id]);
                 const manga_likes = await obj.one(sql.general.getLikesChapter, [chapter.chapter_id]);

                 mangac.likes = manga_likes.count;
                 console.log(mangac, 'culo')
                 mangac.comments = manga_comments_chapter; 
                 return mangac;
                }) 
                .then((data) => {
                    console.log(data);
                    res({
                        message: "Get data item succesfully",
                        status: 200,
                        data: data
                    });
                    obj.done();
                });
        }).catch((error) => {
            console.log(error);
            rej(error);
        });;
    });
};
module.exports.deleteChapter = (data) => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.result(sql.general.deleteChapter, [data.manga_id, data.chapter_id])
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
                });
        }).catch((error) => {
            console.log(error);
            rej(error);
        });;
    });
};