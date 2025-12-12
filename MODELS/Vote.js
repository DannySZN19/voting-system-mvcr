const mongoose = require("mongoose");
import bcrypt from "bcryptjs";

const voteSchema = new mongoose.Schema({

   voter:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    Unique: true,
    required:[true, ""]
   },

   
    

});