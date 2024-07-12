const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Team name is required"],
            unique: true
        },
        members: {
            type: [String],
            required: [true, "Atleast on name is required"],
            validate: {
                validator: function(value) {
                    if(value.length <= 0) {
                        return false
                    }
                    return value.every(member => typeof member === 'string' && member.trim() !== '');
                },
                message: "Members must be a non-empty array containing non-empty strings"
            }
        },
        technologyStack: {
            type: [String],
            required: [true, "Atleast on stack is required"],
            validate: {
                validator: function(value) {
                    if(value.length <= 0) {
                        return false
                    }
                    return value.every(stack => typeof stack === 'string' && stack.trim() !== '');
                },
                message: "technology must be a non-empty array containing non-empty strings"
            }
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
        activeChallenges: {
            type: [String]
        },
        // activeChallenges: [{
        //     challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'UpcomingChallenge' },
        //     name: String,
        // }]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Team', teamSchema);