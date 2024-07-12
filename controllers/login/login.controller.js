const Team = require('../../models/teams/team.model.js');

const login = async(req, res) => {
    try {
        const { name, password } = req.body;
        
        // check if fields are empty
        if( !name || !password ) {
            return res.status(400).json({message: "name and password required"})
        }
        
        const team = await Team.findOne({name});

        // check if team name exists  
        if( !team ) {
            return res.status(404).json({message: "Team not found"})
        }

        // check if password is incorrect
        if( password !== team.password ) {
            return res.status(401).json({message: "password is incorrect"})
        }

        res.status(200).json(team)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = { login };