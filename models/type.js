"use strict";

module.exports = function (sequelize, DataTypes) {
    var Type = sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Type;
};
