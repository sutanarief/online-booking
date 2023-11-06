const User = require('../models/User')
const { user } = require('../services')


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
  
    const result = await user.login({email, password, username})
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  getUser,
  register,
  login
}