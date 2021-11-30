const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:edf710dc8a6a40c4b5b50a87a8e76f8a@localhost:5432/workout");

module.exports = sequelize;