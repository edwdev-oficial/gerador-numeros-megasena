export class Resultado {

    static async getResultado(_data) {

        console.log(_data.nomeLoteria)
        console.log(_data.token)

        // const url = `https://apiloterias.com.br/app/resultado?loteria=[${_data.nomeLoteria}]&token=[${_data.token}]`
        const url = `https://apiloterias.com.br/app/resultado?loteria=${_data.nomeLoteria}&token=${_data.token}`

        console.log(url)

        const response = await fetch(url);

        return response.json()

    }

};

const metodo = new Resultado();