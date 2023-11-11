const router = require('express').Router()
const event = require('../controllers/event')

router.get('/', event.getAllEvent)

module.exports = router
