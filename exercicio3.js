let prompt = require("prompt-sync")();

let numero = parseInt(prompt ("Digite um numero:")) 

if (numero > 0){
    console.log("O Numero é positivo");
} else if (numero < 0 ){
    console.log("O Numero é Negativo");
} else {
    console.log("o numero é zero");
}