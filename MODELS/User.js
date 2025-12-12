const moongoose = require("mongoose");
import bcrypt from "bcryptjs";

// USER SCHEMA

const userSchema = new mongoose.Schema({

name: { 
    type: String,
    required:[true, "Name is required"],
    trim: true,
},

DateofBirth: { 
    type: Date,
    required:[true, "Date of Birth is required"],
},

state: {
    type: String,
},

nin: { 
    type: Number,
    required:[true, "NIN is Required"],
    unique: true
},

email:{ 
    type:String,
    required:[true, "Email is Required"],
    unique: true,
    lowercase: true,
    trim: true
},

Password:{
    type:String,
    required:[true, "Password is Required"],
    minlength: 6,
    trim:true,
    lowercase:true,
    uppercase:true,
    select: false
},

isVerified:{
    type: Boolean,
    default: false
},

hasVoted:{
    type:Boolean,
    default: false
},

verificationStatus:{
    type: String,
    enum: ["Pending", "approved", "rejected"],
    default: "Pending"
},

verifiedBy:{
    type: moongoose.Schema.Types.ObjectId,
    ref: "Officer"
},

verifiedAt:{
    type: Date
},

role:{
    type:String,
    enum:['Voter'],
    default: "voter"
},

createdAt:{
    type: Date,
    default: Date.now
}

});




const User = mongoose.model("User", userSchema);

module.exports = {
User
};