"use strict";

module.exports = function (sequelize, DataTypes) {
    var Postit = sequelize.define('postit', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.INTEGER,
                allowNull: false,
        }
    });

    return Postit;
};
