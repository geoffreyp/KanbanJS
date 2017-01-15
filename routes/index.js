var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res) {
    console.log(models.postit.findAll());
    res.render('index', {
        posts: [{type: "backlog", title: "titre 1", content:"exemple backlog titre 1"},
            {type: "backlog", title: "titre 2", content:"exemple backlog titre 2"},
            {type: "todo", title: "titre 3", content:"exemple todo titre 3"},
            {type: "todo", title: "titre 4", content:"exemple todo titre 4"},
            {type: "todo", title: "titre 5", content:"exemple todo titre 5"},
            {type: "doing", title: "titre 6", content:"exemple doing titre 6"},
            {type: "doing", title: "titre 7", content:"exemple doing titre 7"},
            {type: "doing", title: "titre 8", content:"exemple doing titre 8"},
            {type: "doing", title: "titre 9", content:"exemple doing titre 9"}]
    });
});

module.exports = router;


// kanbanjs / kuser