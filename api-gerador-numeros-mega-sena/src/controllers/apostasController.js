const express = require('express');
const { default: mongoose } = require('mongoose');
const Aposta = require('../models/apostas');
const router = express.Router();

router.post('/', async(req, res) => {

    try {

        const aposta = await Aposta.create(req.body);

        return res.status(200).send(aposta);

    }catch(error) {
        return res.status(400).send({ error: 'Creation aposta failed' });
    };

});

router.get('/', async(req, res) => {

    try {

        const aposta = await Aposta.find({});

        return res.status(200).send(aposta);

    }catch(error) {
        return res.status(400).send({ error: 'List not found' });
    };

});

router.post('/find', async(req, res) => {

    try{

        const aposta = await Aposta.aggregate(
            [   
                {
                    $match: {
                        userId: new mongoose.Types.ObjectId(req.body.userId),
                        concurso: req.body.concurso
                        
                    }
                },
                {
                    $unwind: '$numbersId'
                },
                {
                    $project: {
                        _id: 0,
                        numbersId: 1,
                    }
                },
                {
                    $lookup: {
                        from: 'numbers',
                        localField: 'numbersId.numberId',
                        foreignField: '_id',
                        as: 'numeros'
                    },
                },
                {
                    $unwind: '$numeros'
                },
                {
                    $project: {
                        numbersId: 0,
                        _id: 0,
                        _v: 0,
                        'numeros._id': 0,
                        'numeros.__v': 0,
                        'numeros.userId': 0
                    }
                },
            ]
        );

        return res.status(200).send(aposta);

    }catch(error) {
        console.log(error)
        return res.status(400).send({ error: 'Find not found' });
    };

});

router.put('/', async(req, res) => {

    try {

        return res.status(200).send('');

    }catch(error) {
        return res.status(400).send({ error: '' });
    };

});

router.delete('/', async(req, res) => {

    try {

        const aposta = await Aposta.findByIdAndRemove(req.body._id)

        return res.status(200).send(aposta);

    }catch(error) {
        return res.status(400).send({ error: '' });
    };

});

module.exports = app => app.use('/aposta', router);