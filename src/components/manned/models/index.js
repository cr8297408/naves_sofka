const { DataTypes, UUIDV4} = require('sequelize');
const db = require('../../../config/connection');
sequelize = db.sequelize;

const Manned = sequelize.define('Manned', {
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
  passengersNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mission: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  tableName: "manneds",
  timestamps: true
});

module.exports = Manned;