const express = require('express');
const res = require('express/lib/response');
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

module.exports = (app) => app.use('/numbers', router);
