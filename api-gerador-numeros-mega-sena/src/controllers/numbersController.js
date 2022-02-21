const express = require('express');
const Numbers = require('../models/numbers');
const router = express.Router();

// create



// read
router.get('/', async(req, res) => {

    try {

        return res.send({ msg: 'Entrou na rota get' });

    }catch(error) {
        return res.status(400).send({ error: 'List no found' });
    }

});

module.exports = (app) => app.use('/numbers', router);
