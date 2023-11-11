const { DataTypes } = require('sequelize');
const User = require('./User')
const Event = require('./Event')
const Status = require('./Status');
const bcrypt = require('bcrypt')
const db = require('../config/config');

const CompanyEvent = db.define('CompanyEvent', {
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
  hr_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Status,
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  proposed_dates: {
    type: DataTypes.ARRAY(DataTypes.DATE),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  confirmed_date: DataTypes.DATE,
  remarks: DataTypes.STRING
}, {
  schema: 'event',
  freezeTableName: true,
  tableName: 'company_events',
  hooks: {
    beforeCreate(company_event, opt) {
      company_event.status = 1
    }
  }
});

CompanyEvent.belongsTo(User, { foreignKey: "hr_id", as: 'company' })
CompanyEvent.belongsTo(User, { foreignKey: "vendor_id", as: 'vendor' })

module.exports = CompanyEvent;
