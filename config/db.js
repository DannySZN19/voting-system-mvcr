const dotenv = require("dotenv").config
const mongoose = require("mongoose")

const MONGODB_URL = process.env.MONGODB_URL

const connectToDb =  async ()=>{

    await mongoose.connect(MONGODB_URL)
     .then(()=> console.log("Connected to MongoDB Successfully"))


}

module.exports = connectToDb