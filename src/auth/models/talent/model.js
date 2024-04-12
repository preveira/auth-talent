'use strict';

const talentModel = (sequelize, DataTypes) => sequelize.define ('Talent', {
  name: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ethinicity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
});

module.exports = talentModel;