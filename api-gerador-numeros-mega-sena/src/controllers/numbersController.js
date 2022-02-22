const express = require('express');
const res = require('express/lib/response');
const Numbers = require('../models/numbers');
const router = express.Router();

// create
router.post('/', async(req, res) => {

    try {

        const numbers = Array();
        let qtdNumbers = Number();
        let qtdPlays = Number();
        let numPlay = Number();
        let numbersGenerating;
        
        function gerarAleatorio() {
            const number = Math.floor(Math.random() * 60 + 1);
            return number;
        };
        
        numPlay = 0
        qtdPlays = req.body.qtdPlays;
        qtdNumbers = req.body.qtdNumbers;
        
        do {
        
            do {
        
                const number = gerarAleatorio();
                if(numbers.indexOf(number) === -1) {
                    numbers.push(number)
                };
            
            }while(numbers.length < qtdNumbers)
            
            numbersGenerating = (numbers.sort(function(a,b) {
                return a - b

            }));
        
            const myNumbers = await Numbers.create(
                {
                    numbers: numbersGenerating,
                    userId: req.body.userId
                }
            );

            numbers.splice(0, numbers.length)
        
            numPlay ++
        }while(numPlay < qtdPlays )        

        const findNumberByUserId = await Numbers.find(
            {
                userId: req.body.userId
            }
        );

        return res.send(findNumberByUserId);

    }catch(error) {
        return res.status(400).send({ error: 'Registration failed' });
    };

});

// read
router.get('/', async(req, res) => {

    try {

        const numbers = await Numbers.find({});

        return res.send(numbers);

    }catch(error) {
        return res.status(400).send({ error: 'List no found' });
    }

});

router.put('/', async(req, res) => {

    try {

        const numbers = await Numbers.findByIdAndUpdate(
            {
                _id: req.body._id
            },
            {
                numbers: req.body.numbers,
                userId: req.body.userId
            }
        );

        return res.send(numbers);

    }catch(error) {
        return res.status(400).send({ error: 'Update failed' });
    };

});

router.put('/user', async(req, res) => {

    try {

        const numbers = await Numbers.find(
            {
                userId: req.body.userId
            }
        );

        return res.status(200).send(numbers);

    }catch(error) {
        return res.status(400).send({ error: 'Find not found' });
    };

});

router.delete('/', async(req, res) => {

    try {

        const numbers = await Numbers.findByIdAndRemove(
            {
                _id: req.body._id
            }
        );

        return res.send(numbers);

    }catch(error) {
        return res.status(400).send({ error: 'Delete failed' });
    };

});

router.delete('/deleteByUser', async(req, res) => {

    try {

        const numbers = await Numbers.remove(
            {
                userId: req.body.userId
            }
        );

        return res.status(200).send(numbers)

    }catch(error) {
        return res.status(400).send({ error: 'Delete By User Failed' });
    };

});

module.exports = (app) => app.use('/numbers', router);
