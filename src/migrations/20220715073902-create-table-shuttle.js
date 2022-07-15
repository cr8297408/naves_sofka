'use strict';

const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('shuttles', {
      id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      weight: {
        type: Sequelize.DataTypes.FLOAT
      },
      pushPower: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.DataTypes.STRING
      },
      fuel: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      velocity: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      height: {
        type: Sequelize.DataTypes.FLOAT
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
      SpaceShipId: {
        type: DataTypes.STRING,
        foreignkey: true,
        references: {
          model: 'spaceShips',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('shuttles');
  }
};
