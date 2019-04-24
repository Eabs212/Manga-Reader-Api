const express = require('express');
let router = express.Router();

router.use(require('./session'));
router.use(require('./register'));
router.use('/manga', require('./manga'));


module.exports = router;