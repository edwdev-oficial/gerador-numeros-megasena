const numbers = Array();
let qtdNumbers = Number();
let qtdPlays = Number();
let numPlay = Number();

function gerarAleatorio() {
    const number = Math.floor(Math.random() * 60 + 1);
    return number;
};

numPlay = 0
qtdNumbers = 6;
qtdPlays = 7;

do {

    do {

        const number = gerarAleatorio();
        if(numbers.indexOf(number) === -1) {
            numbers.push(number)
        };
    
    }while(numbers.length < qtdNumbers)
    
    console.log(numbers.sort(function(a,b) {
        return a - b
    }));

    numbers.splice(0, numbers.length)

    numPlay ++
}while(numPlay < qtdPlays )