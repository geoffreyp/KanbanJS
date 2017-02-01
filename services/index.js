var models = require('../models');

module.exports = function (server) {
    var io = require('socket.io')(server);

    io.on('connection', function(client) {
        console.log('Client connected...');

        client.on('change_column', function(data) {
            models.postit.findById(data.id).then(function (p) {
                p.type = data.target;
                p.save().then(function () {
                    console.log("postit updated");
                })
            });
            console.log(data);
        });

    });
};