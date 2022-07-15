'use strict';
const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('satellites', {
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
      },
      orbitLevel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      altitude: {
        type: DataTypes.FLOAT
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('satellites');
  }
};
