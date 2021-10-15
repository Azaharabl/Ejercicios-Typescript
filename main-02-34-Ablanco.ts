import read from 'readline-sync';
import chalk from 'chalk';

//Variables

let numeroApuesta : number
let numeroResultado : number
let totalResultado : string = "- "
let totalApuesta : string = "- "
let ganadas : number = 0

// Inicio

for(let  i=0; i<15; i++){

    //para sacar n apuesta 
    numeroApuesta = Math.trunc(Math.random()*3)
    
    //para que en vez de 3 salga X
    switch (numeroApuesta) {
        case 1:
            totalApuesta += "1 "
            break;
        case 2 :
            totalApuesta += "2 "
        default:
            totalApuesta += "X "
            break;
        }
    //para sacar n resultado 
    numeroResultado = Math.trunc(Math.random()*3)
    
    //para que en vez de 3 salga X
    switch (numeroResultado) {
        case 1:
            totalResultado += "1 "
            break;
        case 2 :
            totalResultado += "2 "
        default:
            totalResultado += "X "
            break;
        }

    if(numeroResultado==numeroApuesta){
        ganadas++
    }

}
// ya hemos dado los dos numero y los resultados, ahora comunicarlos
console.log("tu apuesta ha sido: " + totalApuesta)
console.log("el numero ganado ha sido: " + totalResultado)
console.log("tus aciertos han sido " + ganadas)
console.log("gracias por jugar!!")

