export class Resultado {

    static async getResultado(_data) {

        // const url = `https://apiloterias.com.br/app/resultado?loteria=[${_data.nomeLoteria}]&token=[${_data.token}]`
        const url = `https://apiloterias.com.br/app/resultado?loteria=${_data.nomeLoteria}&token=${_data.token}`

        const response = await fetch(url);

        return response.json()

    }

};

const metodo = new Resultado();