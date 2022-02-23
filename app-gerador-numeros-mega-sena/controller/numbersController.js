import { Numbers } from "../model/numbers.js";

const container = document.querySelector('.container');
const ul = document.querySelector('ul');
const inputQtdJogos = document.querySelector('#qtdJogos');
const inputQtdNumbers = document.querySelector('#qtdNumbers');
const btnStart = document.querySelector('.start');
const btnGetNumbers = document.querySelector('.carregarNumeros');

let li;
let div;

export class NumbersController {

    async createNumbers() {

        console.log(inputQtdJogos.value)
        console.log(inputQtdNumbers.value)

        const data = {
            qtdPlays: inputQtdJogos.value,
            qtdNumbers: inputQtdNumbers.value,
            userId: '6214bf1b7acc166b29b593f1'
        }

        const plays = await Numbers.createNumbers(data);

        metodo.printNumbers(plays);

    }

    printNumbers(plays) {
        
        metodo.removeNumbers();

        plays.forEach((play) => {

            li = document.createElement('li');

            play.numbers.forEach((number) => {

                div = document.createElement('div');
                div.classList.add('number');
                div.textContent = number;
                li.appendChild(div);

            });

            ul.appendChild(li);
        
            container.appendChild(ul);            

        });


    }

    // getNumbers() {

    //     const qtdJogos = inputQtdJogos.value;
    //     const qtdNumeros = inputQtdNumbers.value;

    //     console.log('qtdJogos: ', qtdJogos)

    //     for (let i = 1; i<=qtdJogos; i++) {

    //         li = document.createElement('li');
        
    //         for(let i = 1; i<=qtdNumeros; i++) {
        
    //             div = document.createElement('div');
    //             div.classList.add('number');
    //             li.appendChild(div);
        
    //         };
    //         ul.appendChild(li);
        
    //         container.appendChild(ul);
        
    //     };

    // };

    geraNumbers() {

        btnStart.addEventListener('click', () => {
            metodo.createNumbers();
        });

    }

    getNumbers() {

        btnGetNumbers.addEventListener('click', async () => {
            
            const data = {
                userId: '62140c9e03af8cb62d3a6bbd'
            };

            const numbers = await Numbers.getNumbers(data);

            console.log(numbers);

            metodo.printNumbers(numbers);

        });

    }

    removeNumbers() {

        const numbers = document.querySelectorAll('li');
        
        for (let i = numbers.length - 1; i >= 0; i--) {
            numbers[i].remove();
        };

    }

};

const metodo = new NumbersController();
metodo.geraNumbers();
metodo.getNumbers();
