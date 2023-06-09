var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const baseController = require('../controllers/baseController')

router.get('/', baseController.hello)

module.exports = router;
