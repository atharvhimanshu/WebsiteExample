var express = require('express');
var router = express.Router();
var path = require('path');

// GET home page.
router.get('/', function(req, res, next) {
  // res.render('a.html', { title: 'Express' });
});

router.get('/google', function(req, res, next) {
//res.sendFile(path.join(__dirname + '/public/a.html'));
//res.sendFile('/public/index.html');
res.sendFile(path.join(__dirname + '/../public/google.html'));
});

router.get('/youtube', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/youtube.html'));
  });

  router.get('/tinder', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/tinder.html'));
    });

  router.get('/test2Pubg', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/test2Pubg.html'));
    });


    router.get('/calci', function(req, res, next) {
      res.sendFile(path.join(__dirname + '/../public/calculator.html'));
      });

module.exports = router;
