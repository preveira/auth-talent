'use strict';

require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passowrd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ username: this.username }, secret);
      }
    }
  });

  model.beforeCreate(async (user) => {
    let hasedPass = await bcrypt.hash(user.password, 10);
    user.password = hashedPass;
  });

  model.authenticateBasic = async function (username_param, password) {
    const user = await this.findOne({ where: { username: username_param } });
    console.log(user);
    const valid = await bcrypt.compare(password, user.password)
    if (valid) { return user; }
    throw new Error('Invalid User');
  }

  model.authicateToken = async function (token) {
    try {
      console.log('JWT SIGNUP ISSUES', secret);
      const parsedToken = jwt.verify(token, secret);
      const user = await this.findOne({ where: { username: parsedToken.username } });
      if (user) { return user; }
      throw new Error("User Not Found");
    } catch (e) {
      throw new Error(e.message);
    }
  }

  return model;
}
    
module.exports = userSchema


