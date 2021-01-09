const express=require('express');
const router=express.Router();

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/create', (req, res)=>{
    res.render('create')
})
router.get('/about', (req, res)=>{
    res.render('about')
})
router.get('*', (req, res)=>{
    res.render('404')
})
module.exports=router;