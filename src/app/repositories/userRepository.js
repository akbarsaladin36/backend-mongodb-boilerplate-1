const User = require('../models/user')

class UserRepository {
    async findAll() {
        return await User.find()
    }

    async findOne(username) {
        return await User.findOne({ username: username })
    }

    async create(setData) {
        const user = new User(setData)
        return await user.save()
    }

    async update(username, setData) {
        return await User.findOneAndUpdate({ username: username }, setData)
    }

    async delete(username) {
        return await User.findOneAndDelete({ username: username })
    }
}

module.exports = new UserRepository()