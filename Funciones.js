//funciones Son TAREAS o LISTA DE instrucciones q se ejecutan y devuelven un resultado
//funciones declarativas 
//escritas con camelCase
//Camel case o letra de caja camello es un estilo de escritura que se aplica a
// frases o palabras compuestas.

function miFuncion(){
    console.log (`hola mundo`)
}
// para ejecutarla o llamarla
miFuncion()

//funciones anonimas (No lleva nombre la funcion, la tengo que asignar a una variable)
// primero deben declararse luego pueden ser llamadas 

const saludar = function (){
    console.log(`holas!`)
}

// para ejecutar o llamarla
saludar()

// partes: 
//          los parametros de la funciones son los datos de entrada
//          proceso con los datos de entrada

let num1= 10
let num2= 3

function sumar(x,y){
    console.log (x+y)
}

//Pueden ser muy largas

function calculadora(num1,num2,operacion){

    if(!num1 || !num2){
        return `Falta el valor`
    }

    switch (operacion) {
        case `+`:
            return num1 + num2
        case `-`:
            return num1 - num2
        case `*`:
            return num1 * num2
        case `/`:
            return num1 / num2
        default:   
            return "Operación inválida"
        
    }

}


// RETURN marca el final de la funcion, el codigo que sigue no se ejecutará

// se pueden inclir valores por defecto

function calculadora(num1=0,num2=0,operacion=`+`){

    if(!num1 || !num2){
        return `Falta el valor`
    }

    switch (operacion) {
        case `+`:
            return num1 + num2
        case `-`:
            return num1 - num2
        case `*`:
            return num1 * num2
        case `/`:
            return num1 / num2
        default:   
            return "Operación inválida"
        
    }

}

//

function cubo (num){
    return math.pow(num,3)
}

//

//for...of

let numeros=[12,32,43,23]

function converCuvo (array){
    let numerosAlCubo=[]
    for (let numero of array){
        numerosAlCubo.push(cubo(numero))
    }
    return numerosAlCubo
 }    


 //scope------------------(dentro de la funcion -> LOCAL / fuera de la funcion -> global)
 //existen variables globales y variables que solo existen dentro de las funciones (si fueron inicializadas ahi)
