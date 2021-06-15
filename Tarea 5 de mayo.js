/* 
**Tarea 1 - Números con condicionales**

- Ingresan dos números
- Si el primero es mayor que el segundo mostrar en consola la suma de ambos
- Si el primero es menor que el segundo mostrar en consola la resta del segundo menos el primero.
- Si son iguales mostrar en consola la multiplicación de ambos.

*ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3*
 */

let numero1=10
let numero2=10

if (numero1>numero2) {
    R=numero1+numero2
    console.log(`La suma de ambos numeros es ${R}`)
}else if (numero1<numero2) {
    R=numero2-numero1
    console.log(`La resta de ambos numeros es ${R}`)
}else{
    R=numero2*numero1
    console.log(`La multiplicacion de ambos numeros es ${R}`)
}

/*
**Tarea 2 - Operaciones con condicionales**

- Recibir dos valores y la operación a realizar (+, -, *, /)
- Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
- Con una estructura switch verificar la operación y devolver un mensaje con el resultado
  de la misma.
- Si se ingresa una operación que no está contemplada devolver un mensaje de error.
*/


let num1 =prompt(`Ingrese un número`)
let num2 =prompt(`Ingrese un número`)
let operacion =prompt(`Ingrese la operacion a realizar ( + - * / )`)

if (isNaN(num1)) {
    num1=0
}else if (isNaN(num2)) {
    num2=0
}

switch (operacion) {
    case "+":
        console.log(`La suma de ambos numeros es ${num1+num2}`)
        break;
    case "-":
        console.log(`La resta de ambos numeros es ${num1-num2}`)
        break;
    case "*":
        console.log(`La multiplicacion de ambos numeros es ${num1*num2}`)
        break;
    case "/":
        console.log(`La division de ambos numeros es ${num1/num2}`)
        break;
    default:
        console.log(`ingrese una operacion valida`)
        break;
}