var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hypstafy By Klint' });
});

// router.post('/foo/bar', function (req, res, next) {
//   res.send('Submit has been clicked and router posted to path foo/bar')
// })

router.post('/foo/bar', function (req, res, next) { res.send(req.body.sentence + " something random ") })

module.exports = router;
