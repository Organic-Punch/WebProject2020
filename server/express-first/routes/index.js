var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'FaceBook' });
});

router.get('/join', function(req, res, next) {
    res.render('join', { title: 'join' });
});

router.get('/tal', function(req, res, next) {
    res.render('tal', { title: 'tal' });
});

module.exports = router;