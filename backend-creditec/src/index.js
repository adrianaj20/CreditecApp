require('./connection')

const userController = require('./controller/user.controller')

const UserController = new userController()

const PORT = 4500

const express = require("express")

const app = express()

app.use(express.json())

// endpoints
app.post('/login', UserController.login)
app.post('/register', UserController.register)

app.listen(PORT, () => {
    console.log('Server started at '+ PORT)
})
