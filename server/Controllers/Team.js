import Team from "../Models/Team.js";

const getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getTeamById = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await Team.findById(id);
        res.status(200).json(team);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
};

const createTeam = async (req, res) => {
    const team = req.body;
    const newTeam = new Team(team);

    try {
        await newTeam.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const updateTeam = async (req, res) => {
    const { id: _id } = req.params;
    const team = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No team with that id");

    const updatedTeam = await Team.findByIdAndUpdate(_id, { ...team, _id }, { new: true });

    res.json(updatedTeam);
} 

const deleteTeam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No team with that id");

    await Team.findByIdAndRemove(id);

    res.json({ message: "Team deleted successfully" });
}

const getLeaderboard = async (req, res) => {
    try {
        const teams = await Team.find().sort({ score: -1, timeElapsed: 1 });
        res.status(200).json(teams);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export { getTeams,getTeamById, createTeam, updateTeam, deleteTeam, getLeaderboard };