import { Apostas } from "../model/apostas.js";
import { ResultadoController } from "./resultadoController.js";

export class ApostasController {

    async getApostas() {

        const data = {
            userId: '62140c9e03af8cb62d3a6bbd',
            concurso: 2456
        };

        const aposta = await Apostas.getApostas(data);

        this.printNumbersAposta(aposta,data.concurso)



    }

    async printNumbersAposta(numeros, concurso) {

        const resultado = await ResultadoController.getResultado();
        console.log(resultado)

        let jogo = 0

        numeros.forEach((numero) => {
            jogo++;
            console.log(`Jogo ${jogo}`)
            const dezenas = numero.numeros.numbers 
            dezenas.forEach((dezena) => {
                if (resultado.indexOf(dezena.toString()) !== -1){

                    console.log(dezena.toString())
                }
            });
        });

    }

}

const metodo = new ApostasController();
metodo.getApostas();