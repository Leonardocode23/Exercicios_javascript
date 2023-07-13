let prompt = require("prompt-sync")();

let numero1 = prompt ("Digite o primeiro numero:")
let numero2 = prompt ("Digite o segundo numero:")

if (numero1 > numero2){
    console.log("O numero maior é:" + numero1)
}
 else if (numero2 > numero1){
    console.log ("O numero maior é:" + numero2)
} else {
    console.log ("Numeros iguais")
}