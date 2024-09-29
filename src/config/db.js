const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SMOKE_TREES', 'root', 'ammi489', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
