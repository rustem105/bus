const Sequelize = require('sequelize');
const db = require('../database.js');

const tdriver = db.define('tdriver', {
    DriverNameID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    BusID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tbus',
        key: 'BusID'
      }
    },
    Phone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    DriverYears: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  }, {

    tableName: 'tdriver',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DriverNameID" },
        ]
      },
      {
        name: "fk_BusID",
        using: "BTREE",
        fields: [
          { name: "BusID" },
        ]
      },
    ]
  });

  module.exports = tdriver;