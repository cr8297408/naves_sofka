'use strict';
const {UUIDV4} = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('spaceChips', {
      id: {
        type: Sequelize.DataTypes.STRING,
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
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date()
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('spaceChips');
  }
};
