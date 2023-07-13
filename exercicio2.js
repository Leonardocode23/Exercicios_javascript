let prompt = require("prompt-sync")();

let salario = prompt("Qual o seu salario:")

if (salario < 500){
    console.log(salario *1.3);
}else {
    console.log("Nao ouve aumento")
}