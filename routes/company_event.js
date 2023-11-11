const router = require('express').Router()
const company_event = require('../controllers/company_event')

router.get('/:user_id', company_event.getAllEvent)
router.post('/', company_event.createEvent)
router.patch('/:id', company_event.updateStatus)

module.exports = router