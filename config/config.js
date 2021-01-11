module.exports = {
    development: {
        port: process.env.PORT,
        privateKey: process.env.PRIVATE_KEY,
        dbUrl: process.env.DB_URL
    },
    production: {}
};