const express = require('express');
var router = express.Router();
var home = require('../controllers/home')
var error = require('../controllers/error')

router.get('/', home.home)
router.get('/home', home.home)
//router.get('*', error.error)

module.exports = router