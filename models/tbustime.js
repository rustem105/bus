const Sequelize = require('sequelize');
const db = require('../database.js');
const treis = require('./treis.js');

const tbustime = db.define('tbustime', {
    TimeID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Stop: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    StopTime: {
      type: Sequelize.TIME,
      allowNull: false
    },
    ReisID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: treis,
        key: 'ReisID'
      }
    }
  }, {
    tableName: 'tbustime',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TimeID" },
        ]
      },
      {
        name: "fk_ReisID",
        using: "BTREE",
        fields: [
          { name: "ReisID" },
        ]
      },
    ]
  });


module.exports = tbustime;