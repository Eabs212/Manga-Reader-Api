const express = require('express');
//let upload = require('./../helpers/uploads');
let router = express.Router();
const manga = require('../helpers/manga');
const auth = require('./../middlewares/jwtAuth');


router.get('/', auth, (req, res) => {
    manga.getAllManga(req)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        })
})

router.get(`/:id`, auth, (req, res) => {
        console.log(req.params.id+" "+1)

        manga.getMangaId(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        })
})
router.post('/', auth, (req, res) =>{
    req.body.user_id = req.user.user_id;
    manga.addManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })

  router.put('/:id', auth, (req, res) =>{
    req.body.manga_id = req.params.id;
    req.body.user_id = req.user.user_id;
    manga.updateManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })

  router.delete('/:id', auth, (req, res) =>{
    manga.deleteManga(req.params.id) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })

  router.post('/:id', auth, (req, res) =>{
    req.body.manga_id = req.params.id;
    console.log(req.body)
    manga.addChapter(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })

  router.get(`/:id/:chapterid`, auth, (req, res) => {
    req.body.chapter_id = req.params.chapterid;
    req.body.manga_id = req.params.id;

    manga.getChapter(req.body)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
})

  router.delete('/:id/:chapterid', auth, (req, res) =>{
    req.body.manga_id = req.params.id;
    req.body.chapter_id = req.params.chapterid;
    
    manga.deleteChapter(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })
module.exports = router;