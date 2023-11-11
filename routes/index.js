const router = require('express').Router()
const userRouter = require('./user')
const companyEventRouter = require('./company_event')
const eventRouter = require('./event')


router.use('/user', userRouter)
router.use('/company-event', companyEventRouter)
router.use('/events', eventRouter)



module.exports = router