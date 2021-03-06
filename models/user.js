"use strict";

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        classMethods: {
            associate: function (models) {
                User.belongsToMany(models.project, {
                    foreignKey: "userId",
                    otherKey: 'projectId',
                    through:"userProject"
                })
            }
        }
    });
    return User;
};
