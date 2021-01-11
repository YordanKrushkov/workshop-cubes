const mongoose=require('mongoose');

const registerSchema= new mongoose.Schema({
    username: {type: String, required:true},
    password: {type:String, required:true},
})

const User= mongoose.model('User', registerSchema)

module.exports= User;