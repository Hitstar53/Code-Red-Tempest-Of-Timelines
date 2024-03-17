import Team from "../Models/Team.js";

const verifyLevel = async (req, res) => {
    const {id, level} = req.body;
    try {
        const team = await Team.findOne({id});
        if(!team){
            return res.status(404).json({message: "Team not found"});
        }
        if(team.currentLevel === level){
            return res.status(200).json({data:true, message: "Level Authorized"});
        }
        return res.status(200).json({data:false, message: "Level Unauthorized"});
    }catch(err){
        return res.status(500).json({message: "Internal server error"});
    };
};


export {
    verifyLevel,
}