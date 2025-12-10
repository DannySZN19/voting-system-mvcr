const mongoose = require("mongoose");

// OFFICER SCHEMA

const officerSchema = new mongoose.Schema({
name: { type: String, required: true},
force: { type: String, required: true },
email: { type: String, required: true, unique: true}
});

const Officer = mongoose.model("Officer", officerSchema);

module.exports = {
Officer
};