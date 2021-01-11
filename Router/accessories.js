const express = require('express');
const router = express.Router();
const Accessory = require('../models/accessories')
const {getOneCube, updateCube} = require('../controllers/cubes')
const { getAllAccessories } = require('../controllers/accessory')
const {isAuthenticated} = require('../controllers/auth')



router.get('/create/accessory',isAuthenticated, (req, res) => {
    res.render('createAccessory')
})
router.post('/create/accessory', (req, res) => {
    const data = req.body;

    const cube = new Accessory({ ...data });
    cube.save()
        .then(() => {
            res.redirect('/')
        })
})

router.get('/attach/accessory/:id', isAuthenticated, async (req, res) => {
    const cube = await getOneCube(req.params.id)
    const accessories = await getAllAccessories();

    const cubeAccessories = cube.accessories.map(acc => acc._id.valueOf().toString())

    const notAttached = accessories.filter(acc => {
        const accessoryString = acc._id.valueOf().toString()
        return !cubeAccessories.includes(accessoryString)
    })
    const canAttach = cube.accessories.length !== accessories.length && accessories.length > 0;
    res.render('attach', {
        title: 'Home | Cube',
        ...cube,
        accessories: notAttached,
        canAttach
    });
})
router.post('/attach/accessory/:id', async (req, res) => {
    const { accessory } = req.body;
    await updateCube(req.params.id, accessory)

    res.redirect(`/details/${req.params.id}`)
})

module.exports=router;