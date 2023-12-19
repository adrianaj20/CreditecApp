const {createUser, findByEmail} = require('../repository/user.repo')

class UserController {

    async login(req, res) {
        const {email, password } = req.body
        const user =  await findByEmail({email, password})

        if(user.password !== password) {
            throw Error()
        }

        res.json(user)
    }

    async register(req, res) {

        console.log(req.body)
        const {email, password, birthday, fullname } = req.body

        const user = await createUser({email, password, birthday, fullname })
        res.json(user)
    }
} 

module.exports = UserController