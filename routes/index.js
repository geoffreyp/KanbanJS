var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res) {

    if (req.session.isconnect === "connect") {
        models.postit.findAll({limit: 10}).then(function (postits) {
            console.log();
            res.render('index', {
                posts: postits
            })
        });
    } else {
        res.render('login');
    }


});

router.post('/newpostit', function (req, res) {
    models.postit.create({
        title: req.body.postit['title'],
        content: req.body.postit['content'],
        userId: 1
    });
    res.redirect('/');
});


router.post('/connection', function (req, res) {
    models.user.findAll({where: {name: req.body.login, password: req.body.password}}).then(function (user) {
        if (user.length > 0) {
            req.session.isconnect = "connect";
        } else {
            req.session.isconnect = "bad_login";
        }
    }).then(function () {
        res.redirect('/');
    });
});


router.post('/disconnection', function (req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    })
});

module.exports = router;
