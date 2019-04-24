const express = require('express');
let router = express.Router();
const comment = require('../helpers/comments');
const auth = require('./../middlewares/jwtAuth');

router.post('/:id', auth, (req, res) =>{
    req.body.manga_id = req.params.id;
    console.log(req.user.user_id)
    req.body.user_id = req.user.user_id;
    comment.addCommentManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })

router.post('/:id/:chapterid', auth, (req, res) =>{
    req.body.chapter_id = req.params.chapterid;
    req.body.manga_id = req.params.id;
    req.body.user_id = req.user.user_id;
    comment.addCommentManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })
module.exports = router;