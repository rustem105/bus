const db = require('../database.js');
const Sequelize = require('sequelize');

const users=db.define('users', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
		
	},
	nick: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},

	role: {
		type: Sequelize.ENUM(['admin','user']),
		allowNull: false,
		defaultValue: 'user',
		
	}
}, {
	timestamps: false
});

module.exports = users;