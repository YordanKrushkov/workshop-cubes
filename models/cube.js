const mongoose,{Schema} =require('mongoose');


const cubeSchema= new Schema({
    name:{type:String, required:true},
    description:{type:String, required: true},
    imgUrl:{type:String, required:true},
    dificulty:{type:Number, required:true},
})
const Cube =mongoose.model('Cube', cubeSchema)
module.exports= Cube;