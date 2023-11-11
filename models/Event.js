const { DataTypes } = require('sequelize');
const User = require('./User')
const bcrypt = require('bcrypt')
const db = require('../config/config');

const Event = db.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  vendor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  schema: 'event',
  freezeTableName: true,
  tableName: 'events',
});

Event.belongsTo(User, { foreignKey: 'vendor_id', as: 'vendor' });

module.exports = Event;
