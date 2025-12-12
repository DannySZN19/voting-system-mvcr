const moongoose = require("mongoose");

// PARTY SCHEMA

const partySchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Party name is Required"],
        unique: true,
        trim: true
    },

    slogan:{
        type: String,
        required:[true, 'Slogan is Required'],
        trim:true
    },

    isActive:{

    }

});

const Party = mongoose.model("Party", partySchema);

module.exports = {
Party
};