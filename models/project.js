"use strict";

module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define('project', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Project.belongsTo(models.user, {
                    foreignKey: {
                        allowNull: false
                    },
                    as: "author"
                });
                Project.belongsToMany(models.user, {
                    foreignKey: "projectId",
                    otherKey: 'userId',
                    through: "userProject"
                });
                Project.hasMany(models.postit, {
                    foreignKey: {allowNull: false}
                });

            }
        }
    });

    return Project;
};
