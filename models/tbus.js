const Sequelize = require('sequelize');
const db = require('../database.js');

const TBus = db.define('tbus', {
    BusID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Firm: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    VehicleNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    PassengerSeats: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'tbus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BusID" },
        ]
      },
    ]
  });

module.exports = TBus;