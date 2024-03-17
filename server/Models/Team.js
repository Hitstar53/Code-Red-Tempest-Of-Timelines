import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    teamLeaderName:{
        type: String,
    },
    teamMembers: {
        type: [String],
        required: true,
    },
    currentLevel:{
        type: Number,
        default: 1,
    },
    levels_time:{
        type: [Number],
        default: []
    },
    active:{
        type: Boolean,
        default: false,
    },
    start_time:{
        type: Date,
    },
    level_score:{
        type: [Number],
        default: []
    },
    looped:{
        type: Boolean,
        default: false,
    },
});


const Team = mongoose.model("Team", teamSchema);


export default Team;