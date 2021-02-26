const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const route = require('./routes')
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(route)
app.use(errorHandler)
app.listen(port, () => {
  console.log('this app run on port', port)
})