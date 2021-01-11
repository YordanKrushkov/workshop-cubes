const mongoose = require('mongoose');
const cubeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    imageUrl: { type: String, required: true },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessories: [{
        type: 'ObjectId',
        ref: 'Accessory'
    }],
    creatorId: { type: 'ObjectId', ref: 'User' }
})
const Cube = mongoose.model('Cube', cubeSchema)
module.exports = Cube;