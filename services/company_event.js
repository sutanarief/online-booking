const model = require('../models')

const getAllEvent = async (data) => {
  try {
    const result = await model.CompanyEvent.findAll({
      where: {
        [data.role === 'vendor' ? 'vendor_id' : 'hr_id']: data.user_id
      },
      include: [
        { model: model.User, as: "company", foreignKey: 'hr_id', attributes: ['company_name'] },
        { model: model.User, as: "vendor", foreignKey: 'vendor_id', attributes: ['company_name'] }
      ]
    })

    result.forEach((val) => {
      val.dataValues.vendor = val.dataValues.vendor.company_name
      val.dataValues.company = val.dataValues.company.company_name
    })

    return result
  } catch (error) {
    throw error
  }
}

const createEvent = async (data) => {
  try {
    const result = await model.CompanyEvent.create(data)
    return result
  } catch (error) {
    throw error
  }
}

const updateStatus = async (data) => {
  try {
    const result = await model.CompanyEvent.update(data, {
      where: {
        id: data.id
      },
      returning: true,
    })
    return result
  } catch (error) {
    throw error
  }
}

module.exports = {
  createEvent,
  updateStatus,
  getAllEvent
}