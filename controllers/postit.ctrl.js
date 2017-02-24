var models = require('../models');

module.exports = {
    create: function (name, user, content, type, project) {
        return models.postit.create({
            title: name,
            userId:user,
            content:content,
            type:type,
            projectId:project
        });
    },

    delete: function (id) {
        return models.postit.destroy({where: {id:id}});
    }
};
