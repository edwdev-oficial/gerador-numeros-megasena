import { Resultado } from "../model/resultado.js";

export class ResultadoController {

    async getResultado() {

        const data = {
            nomeLoteria: 'megasena',
            token: '6rqABxwAxjZrgT8'
        };

        const promise = await Resultado.getResultado(data);

        console.log(promise);
         

    }

    startGetResultado() {
        metodo.getResultado();
    }

}

const metodo = new ResultadoController();
// metodo.startGetResultado();