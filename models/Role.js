const { DataTypes } = require('sequelize');
const User = require('./User')
const bcrypt = require('bcrypt')
const db = require('../config/config');

const Role = db.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


module.exports = Role;
