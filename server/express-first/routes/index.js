var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'React' });
});

router.get('/join', function(req, res, next) {
    res.render('join', { title: 'React' });
});

module.exports = router;