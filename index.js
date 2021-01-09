const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const app = require('express')();
const router = require('./Router/router')
const mongoose=require('mongoose');
require('./config/express')(app);
app.use('/', router)
mongoose.connect(config.dbUrl,{ useNewUrlParser: true,useUnifiedTopology: true } , err=>{
    if(err){
        console.log('Error:', err);
        return;
    }

console.log('Connected to the db');
})
app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));


