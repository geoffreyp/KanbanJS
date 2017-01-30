var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res) {
    models.postit.findAll({limit: 10}).then(function (postits) {
        console.log();
        res.render('index', {
            posts: postits
        })
    });
});

router.post('/newpostit', function (req, res) {
    models.postit.create({
        title: req.body.postit['title'],
        content: req.body.postit['content'],
        userId:1
    });
    res.redirect('/');
});

module.exports = router;
