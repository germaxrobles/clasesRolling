// **Tarea1:**
// Definir una función que muestre información sobre una cadena de texto que se le pasa como 
// argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está
//  formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
// 
// **Tarea 2**
// Escribir el código de una función a la que se pasa como parámetro un número entero y 
// devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.
// 
// **Tarea 3**
// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// 
// La fórmula del perímetro  es p = 2*(a + b)
// 
// **Tarea 4**
// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
//  la creación de la tabla debe ser realizada con una función y mostrar solo los resultados
//   del 1 al 10 del número elegido por el usuario.
// 

function calcularTabla(){
    let tabla = parseInt( prompt("ingresar numero"))
    console.log(tabla)
    if(isNaN(tabla)){
        console.log(`No es un numero`)
    }else{ 
        for (let i = 1; i<=10; i++){
        console.log(`${tabla} x ${i} = ${tabla*i}`)
    }}
}
