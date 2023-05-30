const Sequelize = require('sequelize');
const db = require('../database.js');

const Treis = db.define('treis', {
    ReisID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Route: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'troute',
        key: 'RouteID'
      }
    },
    Time: {
      type: Sequelize.TIME,
      allowNull: false
    },
    DriverID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tdriver',
        key: 'DriverNameID'
      }
    },
    Bus: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tbus',
        key: 'BusID'
      }
    },
    dDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  }, {

    tableName: 'treis',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ReisID" },
        ]
      },
      {
        name: "fk_Route",
        using: "BTREE",
        fields: [
          { name: "Route" },
        ]
      },
      {
        name: "fk_Bus",
        using: "BTREE",
        fields: [
          { name: "Bus" },
        ]
      },
      {
        name: "fk_DriverName",
        using: "BTREE",
        fields: [
          { name: "DriverID" },
        ]
      },
    ]
  });

module.exports = Treis;