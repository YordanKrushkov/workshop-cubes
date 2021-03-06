const mongoose = require('mongoose');
const accessoriesShema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    cubes: [{ 
        type: 'ObjectId', 
        ref: 'Cube' }],
})
const Accessory = mongoose.model('Accessory', accessoriesShema)
module.exports = Accessory;