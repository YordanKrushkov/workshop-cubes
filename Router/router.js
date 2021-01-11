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

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('*', (req, res) => {
    res.render('404')
})
module.exports = router;