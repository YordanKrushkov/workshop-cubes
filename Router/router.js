const express=require('express');
const router=express.Router();
const Cube =require('../models/cube')
const {getAllCubes}=require('../controllers/cubes')
router.get('/', async(req, res)=>{
    const cubes= await getAllCubes()
    res.render('index',{title:'Home | Cube', 
    cubes})
})

router.get('/create', async(req, res)=>{
    const cubes= await getAllCubes()
    res.render('create')
})
router.post('/create', (req, res)=>{
    const data=req.body;

    const cube= new Cube({...data});
    cube.save()
    .then(()=>{
        res.redirect('/')
    })
})

router.get('/about', (req, res)=>{
    res.render('about')
})
router.get('/details', (req, res)=>{
    res.render('cube')
})
router.get('*', (req, res)=>{
    res.render('404')
})
module.exports=router;