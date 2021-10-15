import read from 'readline-sync';
import chalk from 'chalk';
import { isNumberObject } from 'util/types';
/**
 * realizado por Azahara Blanco Rodríguez
 * media de notas y agruparlos
 * un numero que es la media  de otros positivos que le das
 */


//variables
let nota = 0;
let suma = 0;
let masnotas: string;
let todas:string = "- " ;
let contadorNotas = 0 ;
let aprobados = 0 ;
let suspensos = 0 ;
let bien = 0 ;
let sobresalientes = 0 ;

//do while para introducir todas las notas que quiera

do {
    do {
        nota=read.questionInt("dime de que nota quieres introducir")
    } while(nota<0 || nota>10); 

     console.log("la nota nueva introducida es " +nota)   
    todas += (" "+nota+",");
    suma = suma + nota ;
    contadorNotas ++
    
    if(nota<5){
            suspensos++

    }else if(nota>=5 && nota< 7){
            aprobados++
            bien++

    }else if(nota >7){
        aprobados++
        sobresalientes++
    }
    
masnotas=read.question("quieres añadir una nota mas?? S/N")
} while (masnotas== 's' && 'S');
    
console.log("los alumnos suspensos son : "+(chalk.red(suspensos)))
console.log("los alunos aprobados son"+(chalk.blue(aprobados))+", y entre ellos "+ bien+" tiene un bien y "+sobresalientes+"tienen u sobresaliete")
console.log("estas son todas las notas introducidas : "+ todas)
console.log("la media de todas las notas es :"+ suma/contadorNotas)