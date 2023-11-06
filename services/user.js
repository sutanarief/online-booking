const model = require('../models')
const { Op } = require("sequelize");


const register = async (data) => {
  try {
    const result = await model.User.create(data)
    return result
  } catch (error) {
    throw error
  }
}

const getUsers = async () => {
  try {
    const result = await model.User.findAll({
      order: [['id', 'ASC']]
    })
    return result
  } catch (error) {
    throw error
  }
}

const login = async ({email, username}) => {
  try {
    const result = await model.User.findOne({
      attributes: ["password", "email", "username"],
      where: {
        [Op.or]: [{ email }, { username }]
      }
    })
    return result
  } catch (error) {
    throw error
  }
}

module.exports = {
  register,
  getUsers,
  login
}