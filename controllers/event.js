const Event = require('../models/Event')
const { event } = require('../services')


const getAllEvent = async (req, res) => {
  try {

    const result = await event.getAllEvent()
    result.forEach((val) => {
      val.vendor_name = val.vendor.company_name
    })

    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  getAllEvent
}