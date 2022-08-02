
const config = require('config')
const db = config.get('db')


const mongoose = require('mongoose')



const connecDB = async()=>{
    try {
        await mongoose.connect(db);
        console.log("Database connected")
    } catch (error) {
    console.log('error')
            
    }


};

module.exports = connecDB;