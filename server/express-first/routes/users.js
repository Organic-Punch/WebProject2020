var express = require('express');
const { json } = require('express');
const { get } = require('.');
const { request } = require('../app');
var router = express.Router();
const users = [{
        id: "123",
        pw: "12",
        Fn: "1",
        Ln: "2",
        sex: "f",
        year: "1",
        month: "2",
        day: "3"
    },
    {
        id: "124",
        pw: "12",
        Fn: "1",
        Ln: "2",
        sex: "f",
        year: "1",
        month: "2",
        day: "3"

    },
    {
        id: "125",
        pw: "12",
        Fn: "1",
        Ln: "2",
        sex: "f",
        year: "1",
        month: "2",
        day: "3"
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
    var Fn = req.body.Fn;
    var Ln = req.body.Ln;
    var sex = req.body.sex;
    var year = req.body.year;
    var month = req.body.month;
    var day = req.body.day;
    var idx = -1;
    var today = new Date();
    var tyear = today.getFullYear();
    if (Number(tyear) - Number(year) < 15) {
        res.send(JSON.stringify({ age: "la" }));
    } else {
        for (var i = 0; i < users.length; i++) {
            if (id == users[i].id) {
                res.send(JSON.stringify({ al: "al" }));
                idx = i;
            }
        }
        if (idx == -1) {
            var arr = { id: id, pw: pw, Fn: Fn, Ln: Ln, sex: sex, year: year, month: month, day: day };
            users.push(arr);
            res.send(JSON.stringify({ ss: "회원가입을 하였습니다." }));
        }
    }

});

router.delete('/:id', function(req, res, next) {
    var id = req.body.id;
    var idx = -1;
    for (var i = 0; i < users.length; i++) {
        if (id == users[i].id) {
            res.send(JSON.stringify({ tal: "회원탈퇴" }));
            idx = i;
            users.splice(idx, 1);
        }
    }
    if (idx == -1) {
        res.send(JSON.stringify({ notal: "탈퇴할 id를 찾지못함" }));
    }

});

module.exports = router;