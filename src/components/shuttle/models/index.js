const { DataTypes, UUIDV4} = require('sequelize');
const db = require('../../../config/connection');
const SpaceShip = require('../../spaceShip/models');
sequelize = db.sequelize;

const Shuttle = sequelize.define('Shuttle', {
  id: {
    type: DataTypes.STRING,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT
  },
  pushPower: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING
  },
  fuel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  velocity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  height: {
    type: DataTypes.FLOAT
  },
  chargeCapacity: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  utilCharge: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  propellerNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  chargeTransported: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
},{
  tableName: "shuttles",
  timestamps: true
});

SpaceShip.hasOne(Shuttle, {
  foreignKey: 'SpaceShipId'
})

Shuttle.belongsTo(SpaceShip)

module.exports = Shuttle;