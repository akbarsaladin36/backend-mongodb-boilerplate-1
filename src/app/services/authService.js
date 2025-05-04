const authRepository = require('../repositories/authRepository')

class AuthService {
    async findOneService(username) {
        const auth = await authRepository.findOne(username)
        if (!auth) throw new Error('User data is not found!')
        return auth
    }

    async registerService(setData) {
        const auth = await authRepository.findOne(setData.username)
        if(auth) throw new Error('User data is registered! Please try to find a new username!')
        return await authRepository.create(setData)
    }
}

module.exports = new AuthService()