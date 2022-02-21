const express = require('express');
const bodyParser = require('../node_modules/body-parser');
const cor = require('cors');

const app = express();
const port = 8082

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cor());

app.get('/', (req, res) => {

    return res.send({ msg: 'Entrou na rota get' })

});

require('./controllers/numbersController')(app);

app.listen(port, () => {
    console.log(`api-gerador-numeros-mega-sena loading in url http://localhost:${port}`);
});