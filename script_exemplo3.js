let prompt = require("prompt-sync")();

// let numero = parseInt (prompt("Digite um numero"));

// if(numero >=10 && numero <=20){
//     console.log("O numero informado esta no intervalo desejado, entre 10 e 20")
// }else{
//     console.log("O numero esta fora do intervalo desejado!!!!!!!!!!!!!!")
// }

let animal = prompt("Digite o nome do animal para saber oque ele tem a dizer: ")

switch(animal){
    case 'cachorro':
    console.log("au auuuuuuuu")
    break;
    case 'gato':
    console.log("miauuuuuuuuu")
    break;
    case 'vaca':
    console.log("muuuuuuuuh")
    break;
    case 'papagaio':
    console.log("Voce foi a culpada  desse amor se acabar...")
    console.log("https://www.youtube.com/watch?v=wAs_KCFSiL0)")
    break;
    default:
        console.log("COnheco nao")
        break
}
