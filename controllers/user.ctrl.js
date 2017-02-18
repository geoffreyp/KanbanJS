var models = require('../models');

module.exports = {
    create: function (name, password) {
        return models.user.create({
            name: name,
            password: password
        });
    },

    delete: function (name) {
        return models.user.destroy({where: {name:name}});
    }
};
