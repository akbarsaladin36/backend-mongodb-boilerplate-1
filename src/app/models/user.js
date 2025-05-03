const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        user_uuid: {
            type: String,
        },
        username: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        address: {
            type: String
        },
        phone_number: {
            type: String
        },
        // avatar_image: {
        //     type: String
        // },
        created_date: {
            type: Date,
            default: Date.now()
        },
        created_by: {
            type: String
        },
        created_by_username: {
            type: String
        },
        updated_date: {
            type: Date
        },
        updated_by: {
            type: String
        },
        updated_by_username: {
            type: String
        }
    }
)

const User = mongoose.model('users', userSchema)

module.exports = User