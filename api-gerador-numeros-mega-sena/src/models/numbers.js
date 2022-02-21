const mongoose = require('../database');

const NumberSchema = new mongoose.Schema({
    numbers: {
        type: Array
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Numbers = mongoose.model('Numbers', NumberSchema);

module.exports = Numbers;