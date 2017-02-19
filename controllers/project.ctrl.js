var models = require('../models');

module.exports = {
    create: function (name, author) {
        return models.project.create({
            title: name,
            authorId:author.id
        }).then(function (project) {
            author.addProject(project);
            return project;
        });
    },

    delete: function (name) {
        return models.project.destroy({where: {title:name}});
    }
};
