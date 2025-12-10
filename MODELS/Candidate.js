const mongoose = require("mongoose");

// CANDIDATE SCHEMA

const candidateSchema = new mongoose.Schema({
name: { type: String, required: true },
candidateId: { type: String, required: true },
state: { type: String, required: true },
dob: { type: String, required: true },
position: { type: String, required: true },
email: { type: String, required: true }
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = {
Candidate
};  