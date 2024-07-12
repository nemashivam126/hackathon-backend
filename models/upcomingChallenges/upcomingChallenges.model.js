const mongoose = require('mongoose');

const upcomingChallengeSchema = new mongoose.Schema({
    name: String,
    start_date: Date,
    end_date: Date
})

module.exports = mongoose.model('UpcomingChallenge', upcomingChallengeSchema);