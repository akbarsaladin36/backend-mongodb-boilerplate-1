const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');

const helper = {
    getStatusJson(res, statusCode, message, data) {
        return res.status(statusCode).json({ message: message, data: data })
    },
    hashPassword(password) {
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(password, salt)
        return encryptPassword
    },
    checkPassword(bodyPassword, dataPassword) {
        const checkPassword = bcrypt.compareSync(bodyPassword, dataPassword)
        return checkPassword
    },
    generateUuid() {
        const uuid = uuidv4()
        const uuidWithoutHyphens = uuid.replace(/-/g, '');
        return uuidWithoutHyphens
    }
}

module.exports = helper