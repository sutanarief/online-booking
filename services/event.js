const model = require('../models')

const getAllEvent = async (data) => {
  try {
    const result = await model.Event.findAll({
      attributes: ['id', 'name', 'vendor_id'],
      include: [
        { model: model.User, as: "vendor", foreignKey: 'vendor_id', attributes: ['company_name'] },
      ]
    })

    result.forEach((val) => {
      val.dataValues.vendor = val.dataValues.vendor.company_name
    })

    return result
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllEvent
}