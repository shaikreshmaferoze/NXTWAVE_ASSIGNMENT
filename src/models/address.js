const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./users');

class Address extends Model {}

Address.init({
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
}, { sequelize, modelName: 'address' });

User.hasMany(Address);
Address.belongsTo(User);

module.exports = Address;
