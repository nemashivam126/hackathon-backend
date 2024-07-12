const Team = require('../../models/teams/team.model.js');

const getTeams = async(req, res) => {
    try {
        const team = await Team.find();
        res.json(team);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const getTeamById = async(req, res) => {
    try {
        const {id} = req.params;
        const getTeambyId = await Team.findById(id);
        if(!getTeambyId){
            return res.json({message: "Team does not exists"})
        }
        res.json(getTeambyId)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createTeam = async(req, res) => {
    try {
        const { name, members, technologyStack, password, activeChallenges } = req.body;
        const team = await Team.create({
            name: name,
            members: members,
            technologyStack: technologyStack,
            password: password,
            activeChallenges: activeChallenges
        });
        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateTeam = async(req, res) => {
    try {
        const {id} = req.params;
        const { name, members, technologyStack, password, activeChallenges } = req.body;
        const team = await Team.findByIdAndUpdate(id, {
            name: name,
            members: members,
            technologyStack: technologyStack,
            password: password,
            // activeChallenges: activeChallenges
            $addToSet: { activeChallenges: { $each: activeChallenges } }
        }, { new: true });
        if(!team) {
            return res.json({message: "Team not found"})
        }
        const updatedTeam = await Team.findById(id);
        res.status(200).json(updatedTeam)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const deleteTeam = async(req, res) => {
    try {
        const {id} = req.params;
        await Team.findByIdAndDelete(id);
        res.json({message: "Team deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    getTeams,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam
};