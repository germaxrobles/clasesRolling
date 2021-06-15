//Estructura de control

//   If     Else

/*

Si se cumple la condicion
    entonces realizar la accion
Si no se cumple la condicion
    entonces realizar otra accion

*/


// el = asigna un valor
// el == compara valor
// el === compara tanto valor como tipo de dato


let num=1000

/* if (condicion) {
    //accion
}else{
    //otra accion
} */


if (num % 2 === 0) {
    console.log(`El numero es par`)
}else{
    console.warn(`El no numero es par`)
}

//If anidado

let num1=10

if (num1 ===10) {
    console.log(`El numero es igual a 10`)
}else if (num1>10) {
    console.log(`El numero es mayor que 10`)
}else{
    console.log(`El numero es menor que 10`)
}

//para que el usuario ingrese el valor let num =parse.Int(prompt(`Ingrese un número`))

// para verificar si ingresa un numero if (isNan(num)) {console.error(`ingrese un numero`)}

//fiesta
//solo puede entrar un mayor de edad >= 18
//si no es mayor de edad entonces debe ir acompañado de un tutor

let edad=14
let tutor= true

if (edad >=18){
    console.log(`Bienvenido a la joda!`)
}else if (tutor===true){
    console.log(`Bienvenido a la joda, no se separe de su tutor`)
}else{
    console.log (`no puede entrar`)}


if (edad <18&&tutor===false){
    console.log(`no puede entrar`)
} else if(edad>=18 || tutor===true){
    console.log(`bienvenido a la joda!`)
}