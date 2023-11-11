const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
const db = require('../config/config');
const Role = require('./Role');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Username has been used'
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        args: true,
        msg: 'Invalid email format'
      }
    },
    unique: {
      args: true,
      msg: 'Your email has been registered'
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'id'
    }
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  schema: 'event',
  freezeTableName: true,
  tableName: 'users',
  hooks: {
    beforeCreate(user, opt) {
      const salt = bcrypt.genSaltSync(10)
      user.password = bcrypt.hashSync(user.password, salt)
    }
  }
});

User.belongsTo(Role, { foreignKey: 'role', as: 'role_label' })
// User.hasMany(Event, { foreignKey: 'vendor_id', as: 'events' });

module.exports = User;
