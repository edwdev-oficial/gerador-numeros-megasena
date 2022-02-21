const express = require('express');
const Numbers = require('../models/numbers');
const router = express.Router();

// create
router.post('/', async(req, res) => {

    try {

        const numbers = await Numbers.create(req.body);

        return res.send(numbers);

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

module.exports = (app) => app.use('/numbers', router);
