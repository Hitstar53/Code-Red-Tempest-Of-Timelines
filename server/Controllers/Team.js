import Team from "../Models/Team.js";
import times from "./level_time.js";

const createTeam = async (req, res) => {
    const {name,teamMembers,teamLeaderName} = req.body;
    try {
        const id = (await Team.find()).length + 1;
        console.log(id);
        const team = await Team.create({id, name, teamMembers,teamLeaderName});
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
    try {
        const {id} = req.params;
    const team = await Team.findOne({id});
    if(!team){
        return res.status(404).json({message: "Team not found"});
    }
    const start_time = team.start_time;
    const current_time = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    console.log(start_time);
    console.log(current_time);
    console.log(new Date(current_time).getTime());
    console.log(new Date(start_time).getTime());
    var time = new Date(current_time).getTime() - new Date(start_time).getTime();

    // convert time to seconds 
    time = time/1000000;
    console.log(time);
    if(team.levels_time.length === 0){
        team.levels_time.push(time);
        await team.save();
        return res.status(200).json({team,message: "Time updated successfully"});
    }
    else{
        const sum = team.levels_time.reduce((a,b) => a+b, 0);
        team.levels_time.push(time - sum);
        await team.save();
        return res.status(200).json({team,message: "Time updated successfully"});
    }
        
    } catch (error) {
        console.log(error); 
        return res.status(500).json({message: "Internal server error"});
        
    }

}

const getTeamScore = async (req, res) => {
    const {id} = req.params;
    try {
        const team = await Team.findOne({id});
        if(!team){
            return res.status(404).json({message: "Team not found"});
        }
        const score = team.level_score.reduce((a,b) => a+b, 0);
        return res.status(200).json({score});
        
    } catch (error) {

        return res.status(500).json({message: "Internal server error"});
        
    }
}



const calculateLevelScore = async (req, res) => {
    console.log("calculateLevelScore");
    const {id} = req.params;
    try {
        const team = await Team.findOne({id});
    if(!team){
        return res.status(404).json({message: "Team not found"});
    }
    const level = team.currentLevel;
    const time = team.levels_time[level-1];
    const score =  50+(times[level-1]["time"]-time)/12;
    team.level_score.push(score);
    team.currentLevel += 1;
    await team.save();
    return res.status(200).json({team,message: "Score updated successfully"});

    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
        
    }

}

const getCurrentLevel = async (req, res) => {
    const {id} = req.params;
    try {
        const team = await Team.findOne({id});
        if(!team){
            return res.status(404).json({message: "Team not found"});
        }
        return res.status(200).json({level: team.currentLevel});
    }catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}

const getIsLooped = async (req, res) => {
    const {id} = req.params;
    try {
        const team = await Team.findOne({id});
        if(!team){
            return res.status(404).json({message: "Team not found"});
        }
        return res.status(200).json({looped: team.looped});
    }
    catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
};

const incrementLevel = async (req, res) => {
    const {id} = req.params;
    try {
        const team = await Team.findOne({id});
        if(!team){
            return res.status(404).json({message: "Team not found"});
        }
        team.currentLevel += 1;
        await team.save();
        return res.status(200).json({message:"Level Incremented"})
        
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
        
    }
};

const getNoOfTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        return res.status(200).json({noOfTeams: teams.length});
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
 };

const uploaTeamsBulk = async (req, res) => {
    const {teams} = req.body;
    try {
        const team = await Team.create(teams);
        return res.status(201).json({team,message: "Teams created successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
};

const getLeaderboard = async (req, res) => {
    try {
        const  teams = await Team.find();

        return res.status(200).json({teams});

        
    } catch (error) {

        return res.status(500).json({message: "Internal server error"});
        
    }
};

export {
    createTeam,
    getTeam,
    activateTeam,
    deactivateTeam,
    updateLevelTime,
    calculateLevelScore,
    getTeamScore,
    getCurrentLevel,
    getIsLooped,
    incrementLevel,
    uploaTeamsBulk,
    getNoOfTeams,
    getLeaderboard
}