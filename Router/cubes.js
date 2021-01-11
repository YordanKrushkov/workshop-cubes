const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const Cube = require('../models/cube')
const { getAllCubes, getCubeWithAccessories } = require('../controllers/cubes')
const {isAuthenticated, isLoggedIn} = require('../controllers/auth')
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
router.get('/create',isLoggedIn,isAuthenticated, async (req, res) => {
    const cubes = await getAllCubes()
    res.render('create',{
        title: 'Create | Cube',
        isLoggedIn: req.isLoggedIn
    })
})
router.post('/create',(req, res) => {
    const data = req.body;

    const token=req.cookies['aid']
     const key= jwt.verify(token, config.privateKey)

    const cube = new Cube({ ...data, creatorId:key.userId});
    cube.save()
        .then(() => {
            res.redirect('/')
        })
})

router.get('/details/:id',isLoggedIn, async (req, res) => {
    const cube = await getCubeWithAccessories(req.params.id)
    res.render('details', {
        title: 'Details | Cube',
        ...cube,
        isLoggedIn: req.isLoggedIn
    })
})

router.get('/edit',isLoggedIn,isAuthenticated,(req,res)=>{

    res.render('editCube', {
        title: 'Edit | Cube',
        isLoggedIn: req.isLoggedIn
    })
})
router.get('/delete',isLoggedIn,isAuthenticated,(req,res)=>{

    res.render('delete', {
        title: 'Delete | Cube',
        isLoggedIn: req.isLoggedIn
    })
})
router.get('/edit',isLoggedIn,isAuthenticated,(req,res)=>{

    res.render('editCube', {
        title: 'Edit | Cube',
        isLoggedIn: req.isLoggedIn
    })
})
module.exports=router;