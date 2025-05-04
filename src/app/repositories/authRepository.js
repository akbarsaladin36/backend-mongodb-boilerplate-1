const User = require('../models/user')

class AuthRepository {
    async findOne(username) {
        return await User.findOne({ username: username })
    }

    async create(setData) {
        const auth = new User(setData)
        return await auth.save()
    }
}

module.exports = new AuthRepository()