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
    timeElapsed:{
        type: Number,
        default: 0,
    },
    active:{
        type: Boolean,
        default: false,
    },
});


const Team = mongoose.model("Team", teamSchema);


const updateTimeElapsed = async () => {
    try {
        const activeTeams = await Team.find({ active: true });
        for (const team of activeTeams) {
            team.timeElapsed += 10;
            await team.save();
        }
    } catch (error) {
        console.error("Error updating timeElapsed:", error);
    }
};

setInterval(updateTimeElapsed, 10000);

export default Team;