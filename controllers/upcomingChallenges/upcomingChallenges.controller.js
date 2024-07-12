const UpcomingChallenge = require('../../models/upcomingChallenges/upcomingChallenges.model.js');

const getChallenges = async(req, res) => {
    try {
        const getChallenge = await UpcomingChallenge.find();
        res.status(200).json(getChallenge);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const createChallenge = async(req, res) => {
    try {
        const { name, start_date, end_date } = req.body;
        const createdChallenge = await UpcomingChallenge.create({
            name: name,
            start_date: start_date,
            end_date: end_date
        });
        res.status(200).json(createdChallenge);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};

module.exports = { getChallenges, createChallenge };