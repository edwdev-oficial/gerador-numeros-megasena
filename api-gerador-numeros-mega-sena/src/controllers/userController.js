const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.post('/', async(req, res) => {

    try {

        const user = await User.create(req.body);

        return res.send(user)

    }catch(error) {
        return res.status(400).send({ error: '' });
    };

});

router.get('/', async(req, res) => {

    try {

        const user = await User.find({});

        return res.send(user)        

    }catch(error) {
        return res.status(400).send({ error: '' });
    };

});

router.put('/', async(req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            {
                _id: req.body._id
            },
            {
                userName: req.body.userName,
                password: req.body.password
            }

        );

        return res.send(user)

    }catch(error) {
        return res.status(400).send({ error: '' });
    };

});

router.delete('/', async(req, res) => {

    try {

        const user = await User.findByIdAndRemove(
            {
                _id: req.body._id
            }
        );	

        return res.send(user)

    }catch(error) {
        return res.status(400).send({ error: '' });
    };

});


module.exports = app => app.use('/user', router);