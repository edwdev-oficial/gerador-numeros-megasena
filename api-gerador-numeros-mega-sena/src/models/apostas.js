const mongoose = require('mongoose');

const ApostaSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    concurso: {
        type: Number
    },
    numbersId: [
        {
            numberId: {
                type: mongoose.Types.ObjectId,
                ref: 'Numbers'
            },
        }
    ]

});

const Aposta = new mongoose.model('Aposta', ApostaSchema);

module.exports = Aposta;