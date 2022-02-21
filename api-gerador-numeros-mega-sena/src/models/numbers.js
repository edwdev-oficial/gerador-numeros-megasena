const mongoose = require('../database');

const NumberSchema = new mongoose.Schema({
    numbers: {
        type: Array
    }
});

const Numbers = mongoose.model('Numbers', NumberSchema);

module.exports = Numbers;