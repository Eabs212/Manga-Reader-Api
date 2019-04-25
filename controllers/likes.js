const express = require('express');
let router = express.Router();
const like = require('../helpers/likes');
const auth = require('./../middlewares/jwtAuth');

router.post('/:id', auth, (req, res) =>{
    req.body.manga_id = req.params.id;
    req.body.user_id = req.user.user_id;
    like.likeManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })
router.post('/:id/:chapterid', auth, (req, res) =>{
    req.body.chapter_id = req.params.chapterid;
    req.body.user_id = req.user.user_id;
    like.likeChapter(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })
  router.delete('/:id', auth, (req, res) =>{
    req.body.manga_id = req.params.id;
    req.body.user_id = req.user.user_id;
    like.dislikeManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })
  router.delete('/:id/:chapterid', auth, (req, res) =>{
    req.body.chapter_id = req.params.chapterid;
    req.body.user_id = req.user.user_id;
    like.dislikeChapter(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })
module.exports = router;