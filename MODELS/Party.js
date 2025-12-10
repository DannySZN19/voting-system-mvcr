const moongoose = require("mongoose");

// PARTY SCHEMA

const partySchema = new mongoose.Schema({
partyId: { type: String, required: true }, 
name: { type: String, required: true },
slogan: { type: String, default: "" }
});

const Party = mongoose.model("Party", partySchema);

module.exports = {
Party
};