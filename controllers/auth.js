const User = require('../models/register')
const Login = require('../models/login')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = 'CUBE_WORKSHOP_FIRST'

const generateToken = (data) => {
    const token = jwt.sign(data, privateKey);
    return token
}

const newRegister = async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword || password < 6) {
        res.redirect('/register')
        return;
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({ username, password: hashedPassword })
        const user = newUser.save()

        const token = generateToken({
            userId: user._id,
            username: user.username
        })
        res.cookie('aid', token)
        res.redirect('/')
    }
    catch {
        res.redirect('/register')
        return
    }
}
const verifyUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        res.redirect('/login')
        return;
    }
    const status = await bcrypt.compare(password, user.password);
    if (!status) {
        res.redirect('/login')
        return;
    }
    const token = generateToken({
        userId: user._id,
        username: user.username
    })
    res.cookie('aid', token)
    res.redirect('/')

}

const isAuthenticated =(req,res, next)=>{

    const token=req.cookies['aid']

    if(!token){
        res.redirect('/')
    }
    try{
        jwt.verify(token, privateKey)
        next()
    }
    catch{
      res.redirect('/')
    }
}
const isLoggedIn=(req, res, next)=>{
    const token=req.cookies['aid']

    if(!token){
        req.isLoggedIn=false;
    }
    try{
        jwt.verify(token, privateKey)
        req.isLoggedIn=true;
    }
    catch{
        req.isLoggedIn=false;
    }
    next()
}

module.exports = {
    newRegister,
    verifyUser,
    isAuthenticated,
    isLoggedIn
}