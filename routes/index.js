var express = require('express');
var router = express.Router();
var ipsumArr = require('../lib/snippets.js');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {title: 'HYPSATAFY By Klint', subtitle: 'How to be super hipsta-licious!'});
});

var randomIpsumIndex = Math.floor(Math.random() * 17);
//router.post('/foo/bar', function (req, res, next) { res.send(req.body.sentence + " something random ")})
router.post('/foo/bar', function (req, res, next) { 
  res.send(req.body.sentence + ipsumArr[randomIpsumIndex])})



module.exports = router;
