const userRepository = require('../repositories/userRepository')

class UserService {
    async findAllService() {
        return await userRepository.findAll()
    }

    async findOneService(username) {
        const user = await userRepository.findOne(username)
        if(!user) throw new Error('That username '+username+' are not exist!')
        return user
    }

    async createService(setData) {
        const user = await userRepository.findOne(setData.username)
        if(user) throw new Error('That username '+ setData.username + ' are exist! Please find a new username now!')
        return await userRepository.create(setData)
    }

    async updateService(username, setData) {
        const user = await userRepository.findOne(username)
        if(!user) throw new Error('That username '+username+' are not exist!')
        return await userRepository.update(username, setData) 
    }

    async deleteService(username) {
        const user = await userRepository.findOne(username)
        if(!user) throw new Error('That username '+username+' are not exist!')
        return await userRepository.delete(username)
    }
}

module.exports = new UserService()