const mongoose = require("mongoose");
import bcrypt from "bcryptjs";


// OFFICER SCHEMA

const officerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Officer name is required"],
        trim: true
    },

    force: {
        type: String,
        required:[ true, "Force is required"],
        enum:['Police', 'military', 'Independent'],

    },
    email: {
        type: String,
        required:[true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,  
    },

    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        select: false
    },

    isActive:{
        type: Boolean,
        default: true
    },

    role:{
        type: String,
        enum: ["officer", "admin"],
        default: "officer"
    },

    Permissions: [{
        type: String,
        enum: ["verify_users", "view_reports", "manage_candidates"]
    }],

    createdAt: {
        type: Date,
        default: Date.now
    }

});

//ENCRYPT PASSWORD BEFORE SAVING

const Officer = mongoose.model("Officer", officerSchema);

module.exports = {
Officer
};