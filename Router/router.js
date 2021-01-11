const express = require('express');
const router = express.Router();
const { getAllCubes} = require('../controllers/cubes')

router.get('/', async (req, res) => {
    const cubes = await getAllCubes()
    res.render('index', {
        title: 'Home | Cube',
        cubes
    })
})
router.get('/login', (req,res)=>{
    res.render('login')
})
router.get('/register', (req,res)=>{
    res.render('register')
})
router.get('/logout', (req,res)=>{
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})



router.get('*', (req, res) => {
    res.render('404')
})
module.exports = router;