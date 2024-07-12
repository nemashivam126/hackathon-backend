const mongoose = require('mongoose');

const stackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Stack', stackSchema);