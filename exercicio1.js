let prompt = require("prompt-sync")();

let nome = prompt("Qual o seu nome: ");
let cargo = prompt("qual o seu cargo: ");
let salario = prompt("QUal o seu salario: ");

if (salario < 1000){
    console.log(salario *1.1);
}else{
    console.log('nao ouve aumento');
}