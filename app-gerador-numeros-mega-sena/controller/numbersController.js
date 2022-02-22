const container = document.querySelector('.container');
const ul = document.querySelector('ul');
const inputQtdJogos = document.querySelector('#qtdJogos');
const inputQtdNumbers = document.querySelector('#qtdNumbers');
const btnStart = document.querySelector('.start');

let li;
let div;

export class Numbers {

    getNumbers() {

        const qtdJogos = inputQtdJogos.value;
        const qtdNumeros = inputQtdNumbers.value;

        console.log('qtdJogos: ', qtdJogos)

        for (let i = 1; i<=qtdJogos; i++) {

            li = document.createElement('li');
        
            for(let i = 1; i<=qtdNumeros; i++) {
        
                div = document.createElement('div');
                div.classList.add('number');
                li.appendChild(div);
        
            };
            ul.appendChild(li);
        
            container.appendChild(ul);
        
        };

    };

    geraNumbers() {

        btnStart.addEventListener('click', () => {
            metodo.getNumbers();
        });

    }

};

const metodo = new Numbers();
metodo.geraNumbers();

