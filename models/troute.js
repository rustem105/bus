const Sequelize = require('sequelize');
const db = require('../database.js');

const Troute = db.define('troute', {
    RouteID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tTo: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    fFrom: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'troute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RouteID" },
        ]
      },
    ]
  });

module.exports = Troute;