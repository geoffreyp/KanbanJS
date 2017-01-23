"use strict";

module.exports = function (sequelize, DataTypes) {
    var Postit = sequelize.define('postit', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
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
        type: {
            type: DataTypes.INTEGER,
                allowNull: false,
        }
    });

    return Postit;
};
