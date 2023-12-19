const userModel = require('../model/user.model')

const createUser = async ({fullname, email, password, birthday}) => {
    const data = new userModel({ fullname, email, password, birthday})
    await data.save()
}

const findByEmail = async ({email}) => {
    return await userModel.findOne({email: email})
}

module.exports = {
    createUser,
    findByEmail
}