const express = require('express')
const Route = express.Router()
const authRoute = require('../app/routes/authRoute')
const userRoute = require('../app/routes/userRoute')

Route.use('/auth', authRoute)
Route.use('/users', userRoute)

module.exports = Route