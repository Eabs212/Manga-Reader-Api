const express = require('express');
let router = express.Router();

router.use(require('./session'));
router.use(require('./register'));
router.use('/manga', require('./manga'));
router.use('/comments', require('./comments'));
router.use('/likes', require('./likes'));


module.exports = router;