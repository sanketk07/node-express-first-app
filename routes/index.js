var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , condition: false});
});

//Can also be done this way
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/detail', function(req, res, next) {
//   res.send('detail');
// });

module.exports = router;
