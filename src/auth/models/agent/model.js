'use strict'

const agentModel = (sequelize, DataType) => sequelize.definite('Agent', {
  name: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true 
  },
});

module.exports = agentModel