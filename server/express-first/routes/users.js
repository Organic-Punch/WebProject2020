var express = require('express');
const { json } = require('express');
const { get } = require('.');
const { request } = require('../app');
var router = express.Router();
const users = [{
        id: "123",
        pw: "12",
        a: "1"
    },
    {
        id: "124",
        pw: "12",
        a: "1"
    },
    {
        id: "125",
        pw: "12",
        a: "1"
    }
];

/* GET users listing. require, response*/
router.get("/", function(req, res, next) {
    res.send(users);
});
router.get("/:id", function(req, res, next) {
    var id = req.params.id;
    var CH = -1;
    for (var i = 0; i < users.length; i++) {
        var info = users[i].id;
        if (id == info) {
            res.send(JSON.stringify(users[i]));
            CH = i;
        }
    }
    if (CH == -1) res.send(JSON.stringify({ err: 'user notfound' }));
});

router.post('/', function(req, res, next) {
    var id = req.body.id;
    var pw = req.body.pw;
    var idx = -1;
    for (var i = 0; i < users.length; i++) {
        if (id == users[i].id) {
            res.send(JSON.stringify("동일한 아이디가 존재합니다."));
            idx = i;
        }
    }
    if (idx == -1) {
        var arr = { id: id, pw: pw, a: 1 };
        users.push(arr);
        res.send(JSON.stringify("회원가입을 하였습니다."));
    }
});

router.delete('/:id', function(req, res, next) {
    var id = req.body.id;
    var idx = -1;
    for (var i = 0; i < users.length; i++) {
        if (id == users[i].id) {
            res.send(JSON.stringify("회원탈퇴"));
            idx = i;
            users.splice(idx, 1);
        }
    }
    if (idx == -1) {
        res.send(JSON.stringify("탈퇴할 id를 찾지못함"));
    }

});

module.exports = router;