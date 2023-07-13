let prompt = require("prompt-sync")();

let numero = prompt ("Digite um numero:")

if (numero % 2 === 0){
    console.log("é um numero par");
}else {
    console.log("é um numero impar");
}