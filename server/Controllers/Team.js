import Team from "../Models/Team.js";

const createTeam = async (req, res) => {
    const {name,teamMembers} = req.body;
    try {
        const id = (await Team.find()).length + 1;
        console.log(id);
        const team = await Team.create({id, name, teamMembers});
        return res.status(201).json({team,message: "Team created successfully"});

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
        
    }
};


const getTeam = async (req, res) => {
    const {id} = req.params;
    try {
        const team = await Team.findOne({id});
        if(!team){
            return res.status(404).json({message: "Team not found"});
        }
        return res.status(200).json({team});
        
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
        
    }
};

const activateTeam = async (req, res) => {
    const {id} = req.params;
    try {
        const team = await Team.findOne({id});
        if(!team){
            return res.status(404).json({message: "Team not found"});
        }
        team.active = true;
        team.start_time = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
        await team.save();
        return res.status(200).json({team,message: "Team activated successfully"});
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}



const deactivateTeam = async (req, res) => {
    const {id} = req.params;
    try {
        const team = await Team.findOne({id});
        if(!team){
            return res.status(404).json({message: "Team not found"});
        }
        team.active = false;
        await team.save();
        return res.status(200).json({team,message: "Team deactivated successfully"});
    }
    catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}


const updateLevelTime = async (req, res) => {
    const {id} = req.params;
    const team = await Team.findOne({id});
    if(!team){
        return res.status(404).json({message: "Team not found"});
    }
    const start_time = team.start_time;
    const current_time = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    const time = new Date(current_time) - new Date(start_time);
    if(team.levels_time.length === 0){
        team.levels_time.push(time);
    }
    else{
        const sum = team.levels_time.reduce((a,b) => a+b, 0);
        team.levels_time.push(time - sum);
    }

}



const calculateLevelScore = async (req, res) => {
    const {id} = req.params;
    try {
        const team = await Team.findOne({id});
    if(!team){
        return res.status(404).json({message: "Team not found"});
    }
    const level = team.currentLevel;
    const time = team.levels_time[level-1];
    const score = 100 + 10*(900-time);
    team.level_score.push(score);
    await team.save();
    return res.status(200).json({team,message: "Score updated successfully"});

    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
        
    }

}

export {
    createTeam,
    getTeam,
    activateTeam,
    deactivateTeam,
    updateLevelTime,
    calculateLevelScore
}