const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const {Sequelize} = require('sequelize')

const Product = sequelize.define('products', {
    id_products: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    cipher: {type: DataTypes.STRING},
    count: {type: DataTypes.INTEGER},
    producer: {type: DataTypes.STRING}
})

module.exports = {
    Product
}