const express = require('express')
const Route = express.Router()
const userRoute = require('../app/routes/userRoute')

Route.use('/users', userRoute)

module.exports = Route