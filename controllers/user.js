const User = require('../models/User')
const bcrypt = require('bcrypt')
const { user } = require('../services')
const generateToken = require('../helper/jwt')


const getUser = async (req, res) => {
  try {
    const result = await user.getUsers()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const register = async (req, res) => {
  try {
    const {
      email,
      username,
      password,
      company_name,
      role
    } = req.body

    const result = await user.register({
      email,
      username,
      password,
      company_name,
      role
    })

    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const login = async (req, res) => {
  try {
    const {
      email,
      password,
      username
    } = req.body

    const result = await user.login({ email, password, username })
    const validate = bcrypt.compareSync(password, result.password)

    if (!validate) throw { error: 'Either email or password is wrong' }


    const access_token = generateToken({
      id: result.id,
      email: result.email,
      role: result.role,
      username: result.username
    })

    res.status(200).json({ access_token })

  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  getUser,
  register,
  login
}