const express = require('express');
let router = express.Router();
const like = require('../helpers/likes');
const auth = require('./../middlewares/jwtAuth');

router.post('/:id', auth, (req, res) =>{
    req.body.manga_id = req.params.id;
    like.likeManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })

  router.delete('/:id', auth, (req, res) =>{
    req.body.manga_id = req.params.id;
    like.dislikeManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })
module.exports = router;