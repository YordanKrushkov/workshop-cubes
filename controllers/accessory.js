const Accessory = require('../models/accessories')

const getAllAccessories= async()=>{
    const accessories=await Accessory.find().lean();

    return accessories
}

const getOneAccessory=async(id)=>{
    const accessory=await Accessory.findById(id).lean();
    return accessory;
}

module.exports=({
    getAllAccessories,
    getOneAccessory
})