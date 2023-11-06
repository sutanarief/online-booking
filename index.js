const express = require('express')
const router = require('./routes/index')
const routes = require('./routes/index')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})