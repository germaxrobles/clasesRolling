//for
// 
// for (let i = 0; i < 10; i++) {
    // 
    //   acciones
    //   console.log(i)
// }
// 
// tarea
// ingresar la tabla que queremos calcular
// mostrar por consila la tabla pedida

// let tabla = parseInt(prompt(`Ingrese el numero de la tabla a calcular`))
// 
// if (isNaN(tabla)){
    // console.error(`Debe enviar un numero`)
// }
// 
// for (let i = 1;i<=10;i++){
// 
    // console.log(`${tabla} x ${i} = ${tabla*i}`)
// }
// 
let tabla = parseInt(prompt("numero"));
while (tabla) {
    for(let i=1 ; i<=10 ; i++) {
        console.log(`${tabla} x ${i} =${tabla * i}`);
    }
    tablaEj2=parseInt(prompt("numero"))
}