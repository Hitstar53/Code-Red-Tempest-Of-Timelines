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


export {
    createTeam,
    getTeam,
    activateTeam,
    deactivateTeam,
}