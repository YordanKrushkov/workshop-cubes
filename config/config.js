module.exports = {
    development: {
        port: process.env.PORT || 4000,
        dbUrl: 'mongodb+srv://user:user_1234@softuni.fdzqw.mongodb.net/cubes?retryWrites=true&w=majority'
    },
    production: {}
};