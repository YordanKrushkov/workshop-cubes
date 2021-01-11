const express = require('express');
const router = express.Router();
const Cube = require('../models/cube')
const { getAllCubes, getCubeWithAccessories } = require('../controllers/cubes')


router.get('/create', async (req, res) => {
    const cubes = await getAllCubes()
    res.render('create')
})
router.post('/create', (req, res) => {
    const data = req.body;

    const cube = new Cube({ ...data });
    cube.save()
        .then(() => {
            res.redirect('/')
        })
})

router.get('/details/:id', async (req, res) => {
    console.log(req.params.id);
    const cube = await getCubeWithAccessories(req.params.id)
    res.render('details', {
        title: 'Details | Cube',
        ...cube
    })
})

module.exports=router;