const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("buses","root","",{host: "localhost", dialect:"mysql"})
module.exports = sequelize