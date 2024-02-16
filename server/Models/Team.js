import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    teamId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    members: {
        type: [String],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    timeElapsed: {
        type: Number,
        default: 0
    },
});

const Team = mongoose.model("Team", teamSchema);

export default Team;