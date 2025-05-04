const authService = require('../services/authService')
const helper = require('../../helper/helper')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const AuthController = {
    async registerController(req, res) {
        try {
            const { username, email, password } = req.body
            const result = await authService.findOneService(username)
            if(result) {
                return helper.getStatusJson(res, 400, 'A username '+username+' data is registered!', null)
            } else {
                const userUUID = helper.generateUuid()
                const hashedPassword = helper.hashPassword(password)
                const setData = {
                    user_uuid: userUUID,
                    username: username,
                    email: email,
                    password: hashedPassword,
                    created_date: Date.now(),
                    created_by: userUUID,
                    created_by_username: username
                }
                const newUser = await userService.createService(setData)
                return helper.getStatusJson(res, 200, 'A new user is succesfully created!', newUser)
            }
        } catch(error) {
            return helper.getStatusJson(res, 404, 'Bad Request', error.message)
        }
    },
    async loginController(req, res) {
        try {
            const { username, password } = req.body
            const result = await authService.findOneService(username)
            if(!result) {
                return helper.getStatusJson(res, 400, 'A username '+username+' data are not registered! Please register now!', null)
            } else {
                const checkPassword = helper.checkPassword(password, result.password)
                if(checkPassword) {
                    const payload = {
                        username: result.username,
                        email: result.email
                    }
                    const token = jwt.sign({...payload}, process.env.JWT_SECRETKEY, {
                        expiresIn: process.env.JWT_EXPIRESTIME
                    })
                    const loginResult = {...payload, token}
                    return helper.getStatusJson(res, 200, 'User is successfully logged in!', loginResult)
                } else {
                    return helper.getStatusJson(res, 400, 'A password does not match! Please try again!', null)
                }
            }
        } catch(error) {
            return helper.getStatusJson(res, 404, 'Bad Request', error.message)
        }
    }
}

module.exports = AuthController