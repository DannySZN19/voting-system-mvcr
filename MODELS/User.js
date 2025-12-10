const moongoose = require("mongoose");
import bcrypt from "bcryptjs";

// USER SCHEMA

const userSchema = new mongoose.Schema({

name: { 
    type: String,
    required:[true, "Name is required"],
    trim: true,
},

dob: { 
    type: Date,
    required:[true, "Date of Birth is required"],
},


userId: { type: String, required: true }, 
state: { type: String, required: true },
nin: { type: Number, required: true }, 
email: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = {
User
};