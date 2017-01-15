'use strict'
require('sequelize');

class DAO{

    var model = undefined;
    
    constructor(model) {
        this.model = model;
    }

    /*
     return a Promise with results in parameter of the then function
     */
    select(attributes){
        if(attributes != undefined && attributes != null){
            return this.model.findAll(attributes);
        }else{
            return this.model.findAll();
        }
    }
}

module.exports.DAO = DAO;