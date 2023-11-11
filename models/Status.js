const { DataTypes } = require('sequelize');
const User = require('./User')
const bcrypt = require('bcrypt')
const db = require('../config/config');

const Status = db.define('Status', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Status;
