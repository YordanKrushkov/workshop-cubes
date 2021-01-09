const Cube = require('../models/cube')

const getAllCubes= async()=>{
    const cubes=await Cube.find().lean();

    return cubes
}

const getOneCube=async(id)=>{
    const cube=await Cube.findById(id).lean();
    return cube;
}

const updateCube=async(cubeId, accessoriesId)=>{
  await Cube.findByIdAndUpdate(cubeId, {
        $addToSet:{
            accessories:[accessoriesId]
        }
    })
}

module.exports=({
    getAllCubes,
    getOneCube,
    updateCube
})