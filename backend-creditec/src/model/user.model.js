const mongoose = require("mongoose") 

const UserModel = new mongoose.Schema({
    fullname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    birthday: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('User', UserModel)
