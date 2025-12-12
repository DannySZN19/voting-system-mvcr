const mongoose = require("mongoose");

// CANDIDATE SCHEMA

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Candidate name is required'],
        trim: true
    },

    dateOfBirth: {
        type: Date,
        required: [true, "DateOfBirth is required"],
    },

    party: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Party",
        required: [true, "Party is required"]
    },

    state: {
        type: String,
        required: [true, 'State is required '],
        trim: true
    },

    electionType:{
        type: String,
        enum: ['presidential', 'gubernatorial', 'senatorial']
    },

    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true
    },

    isActive: {
        type: Boolean,
        default: true
    },

    votesCount:{
        type: Number,
        default: 0
    },

    createdAt:{
        type: Date,
        default: Date.now
    }

});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = {
    Candidate
};  