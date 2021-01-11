const express = require('express');
const router = express.Router();
const { getAllCubes} = require('../controllers/cubes')
const {isLoggedIn}=require('../controllers/auth')
router.get('/',isLoggedIn, async (req, res) => {
    const cubes = await getAllCubes()
    res.render('index', {
        title: 'Home | Cube',
        cubes,
        isLoggedIn: req.isLoggedIn
    })
})

router.get('/about',isLoggedIn, (req, res) => {
    res.render('about',{
        title: 'About | Cube',
        isLoggedIn: req.isLoggedIn,
    })
})

router.get('*', (req, res) => {
    res.render('404')
})
module.exports = router;