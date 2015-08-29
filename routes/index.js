var express = require('express');
var router = express.Router();
var ipsumArr = require('../lib/snippets.js');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {title: 'HYPSATAFY By Klint', subtitle: 'How to be super hipsta-licious!'});
});

//Generates random index of ipsum array in snippets.js

var randomIpsumIndex = Math.floor(Math.random() * 17);

// var result = [];
// var convert = function(){
//   or (var i = 0; i < sentToArr.length; i++){
//       result.push(sentToArr[i] + ipsumArr[randomIpsumIndex])
//     }
//     return result.join();
// }
router.post('/foo/bar', function (req, res, next) { 
  var sentToArr = req.body.sentence.split(' ');
  var result = [];
  var convert = function(){
    for (var i = 0; i < sentToArr.length; i++){
      result.push(sentToArr[i] + ' ' + ipsumArr[randomIpsumIndex])
    };
    return result.join();
  }; 
  res.send(convert())
})



module.exports = router;
