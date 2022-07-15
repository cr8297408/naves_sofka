const { DataTypes, UUIDV4} = require('sequelize');
const db = require('../../../config/connection');
sequelize = db.sequelize;

const SpaceShip = sequelize.define('SpaceShip', {
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
  destinity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  enginesNumber: {
    type: DataTypes.FLOAT
  }
},{
  tableName: "spaceShips",
  timestamps: true
});

module.exports = SpaceShip;
