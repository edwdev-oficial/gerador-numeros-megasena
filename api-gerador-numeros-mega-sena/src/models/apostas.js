const mongoose = require('mongoose');

const ApostaSchema = new mongoose.Schema({

    numbers: {
        type: Array,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

});

const Aposta = new mongoose.model('Aposta', ApostaSchema);

module.exports = Aposta;