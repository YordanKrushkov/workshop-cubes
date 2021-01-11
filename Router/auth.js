const express = require('express');
const router = express.Router();
const {newRegister,verifyUser } = require('../controllers/auth')
const Login = require('../models/login')

router.get('/login', (req,res)=>{
    res.render('login')
})
router.post('/login', async(req,res)=>{
    await verifyUser(req,res);
})


router.get('/register', (req,res)=>{
    res.render('register')
})
router.post('/register', async(req,res)=>{
    await newRegister(req, res)
})

router.get('/logout', (req,res)=>{
    res.clearCookie('aid')
    res.redirect('/');
})

module.exports=router;