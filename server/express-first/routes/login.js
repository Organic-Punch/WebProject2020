var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var id = req.body.id;
    var pw = req.body.pw;
    if (id == "admin" && pw == "1234") res.send("로그인성공!");
    else if (id != "admin" || pw != "1234") res.send("아이디 또는 비밀번호 오류");
});

module.exports = router;