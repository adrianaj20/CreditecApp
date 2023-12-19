const mongoose = require("mongoose") 

mongoose.connect("mongodb://127.0.0.1:27017/creditec", { useNewUrlParser: true })

const database =  mongoose.connection

database.on('connected', () => {
    console.log('[LOG] Database Connected')
})
    

