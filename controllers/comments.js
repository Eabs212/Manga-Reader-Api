const express = require('express');
let router = express.Router();
const comment = require('../helpers/comments');
const auth = require('./../middlewares/jwtAuth');

router.post('/:id', auth, (req, res) =>{
    req.body.manga_id = req.params.id;
    comment.addCommentManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })
module.exports = router;