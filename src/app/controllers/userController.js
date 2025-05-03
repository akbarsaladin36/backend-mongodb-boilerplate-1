const userService = require('../services/userService')
const helper = require('../../helper/helper')

const UserController = {
    async findAllController(req, res) {
        try {
            const result = await userService.findAllService()
            if(result) {
                return helper.getStatusJson(res, 200, 'All messages are succesfully appeared!', result)
            } else {
                return helper.getStatusJson(res, 200, 'All messages are empty!', null)
            }
        } catch(error) {
            return helper.getStatusJson(res, 404, 'Bad Request', error.message)
        }
    },
    async findOneController(req, res) {
        try {
            const { username } = req.params
            const result = await userService.findOneService(username)
            if(result) {
                return helper.getStatusJson(res, 200, 'A username '+username+' data is succesfully appeared!', result)
            } else {
                return helper.getStatusJson(res, 400, 'A username '+username+' data is not found!', null)
            }
        } catch(error) {
            return helper.getStatusJson(res, 404, 'Bad Request', error.message)
        }
    },
    async createUserController(req, res) {
        try {
            const { username, email, password } = req.body
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
            const result = await userService.createService(setData)
            return helper.getStatusJson(res, 200, 'A new user is succesfully created!', result)
        } catch(error) {
            return helper.getStatusJson(res, 404, 'Bad Request', error.message)
        }
    },
    async updateUserController(req, res) {
        try {
            const { username } = req.params
            const result = await userService.findOneService(username)
            if(result) {
                const { first_name, last_name, address, phone_number } = req.body
                const setData = {
                    first_name: first_name,
                    last_name: last_name,
                    address: address,
                    phone_number: phone_number,
                    updated_date: Date.now(),
                    updated_by: result.user_uuid,
                    updated_by_username: result.username
                }
                const updateUser = await userService.updateService(username, setData)
                return helper.getStatusJson(res, 200, 'A username '+username+' data is succesfully updated!', updateUser)
            } else {
                return helper.getStatusJson(res, 400, 'A username '+username+' data is not found!', null)
            }
        } catch(error) {
            return helper.getStatusJson(res, 404, 'Bad Request', error.message)
        }
    },
    async deleteUserController(req, res) {
        try {
            const username = req.params.username
            const result = await userService.findOneService(username)
            if(result) {
                await userService.deleteService(username)
                return helper.getStatusJson(res, 200, 'A username '+username+' data is succesfully deleted!', null)
            } else {
                return helper.getStatusJson(res, 400, 'A username '+username+' data is not found!', null)
            }
        } catch(error) {
            return helper.getStatusJson(res, 404, 'Bad Request', error.message)
        }
    }
}

module.exports = UserController