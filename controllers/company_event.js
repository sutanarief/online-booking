const CompanyEvent = require('../models/CompanyEvent')
const { company_event } = require('../services')


const getAllEvent = async (req, res) => {
  try {
    const user_id = req.params.user_id
    const role = req.query.role

    const result = await company_event.getAllEvent({user_id, role})
    
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const createEvent = async (req,res) => {
  try {
    const {
      vendor_id,
      hr_id,
      location,
      name,
      proposed_dates
    } = req.body

    const result = await company_event.createEvent({
      vendor_id,
      hr_id,
      location,
      name,
      proposed_dates,
      status: ''
    })

    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateStatus = async (req, res) => {
  try {
    const {
      status,
      remarks,
      confirmed_date
    } = req.body
    const id = req.params.id

    const result = await company_event.updateStatus({
      id,
      status,
      ...(remarks && { remarks }),
      ...(confirmed_date && { confirmed_date })
    })

    res.status(200).json(result[1][0])
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  getAllEvent,
  createEvent,
  updateStatus
}