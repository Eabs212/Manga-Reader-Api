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

router.get(`/id`, auth, (req, res) => {
        console.log(req.params.itemId+""+1)

    content.getMangaId(req.body.itemId)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        })
})
router.post('/', auth, (req, res) =>{
    manga.addManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })

  router.put('/', auth, (req, res) =>{
    manga.updateManga(req.body) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })

  router.delete('/', auth, (req, res) =>{
    manga.deleteManga(req.body.manga_id) 
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err);
    })
  })
module.exports = router;