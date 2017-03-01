var models = require('../models');
var postitCtrl = require('../controllers/postit.ctrl');

module.exports = function (server) {
    var io = require('socket.io')(server);

    io.on('connection', function(client) {
        console.log('Client connected...');

        client.on('change_column', function(data) {
            models.postit.findById(data.id).then(function (p) {
                p.type = data.target;
                p.save().then(function () {
                    console.log("postit updated");
                    client.broadcast.emit('update_user_column', {id:data.id, target:data.target});
                })
            });

        });

        client.on('delete_postit', function(data) {
           postitCtrl.delete(data).then(function () {
               client.broadcast.emit('delete_postit_interaction', {id:data});
           });
        });

        client.on('new_postit_interaction', function(data) {
           console.log(data);
            client.broadcast.emit('new_postit_from_other_user', {html:"TODO : html of a future new postit"});
        });

    });
};