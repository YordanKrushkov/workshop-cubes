const express=require('express');
const router=express.Router();
const Cube =require('../models/cube')
const Accessory =require('../models/accessories')
const {getAllCubes,getOneCube,updateCube}=require('../controllers/cubes')
const {getAllAccessories, getOneAccessory}=require('../controllers/accessory')
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
router.get('/details/:id', async(req, res)=>{
    console.log(req.params.id);
    const cube= await getOneCube(req.params.id)
    res.render('details',{
        title: 'Details | Cube',
        ...cube
    })
})


router.get('/create/accessory', (req,res)=>{
 res.render('createAccessory')
})
router.post('/create/accessory', (req,res)=>{
    const data=req.body;

    const cube= new Accessory({...data});
    cube.save()
    .then(()=>{
        res.redirect('/')
    })
})



router.get('/attach/accessory/:id', async(req,res)=>{
    const cube= await getOneCube(req.params.id)
    const accessories= await getAllAccessories();
    res.render('attach',{title:'Home | Cube', 
    ...cube,
    accessories});
})
router.post('/attach/accessory/:id', async(req,res)=>{
    const{accessory}=req.body;
    await updateCube(req.params.id, accessory)
    
    res.redirect(`/details/${req.params.id}`)
})


router.get('*', (req, res)=>{
    res.render('404')
})
module.exports=router;