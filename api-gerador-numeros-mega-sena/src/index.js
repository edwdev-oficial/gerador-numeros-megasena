const express = require('express');
const bodyParser = require('../node_modules/body-parser');
const cor = require('cors');

const port = 8082

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {

    return res.send({ msg: 'Entrou na rota get' })

});

app.listen(port, () => {
    console.log(`api-gerador-numeros-mega-sena loading in url http://localhost:${port}`);
});