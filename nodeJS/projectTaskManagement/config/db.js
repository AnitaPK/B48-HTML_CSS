const mongoose = require('mongoose')
require('dotenv').config()

async function connectDB(){

    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log('connected to database')
    } catch (error) {
        console.log(error)
        process.exit(1);

    }
}


module.exports = connectDB
