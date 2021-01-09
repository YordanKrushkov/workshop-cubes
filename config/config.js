const password=require('../password/password')
module.exports = {
    development: {
        port: process.env.PORT || 4000,
        dbUrl: `mongodb+srv://user:${password}@softuni.fdzqw.mongodb.net/cubes?retryWrites=true&w=majority`
    },
    production: {}
};