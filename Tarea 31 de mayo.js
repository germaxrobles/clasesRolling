/*Escribe una clase Producto para crear objetos. 
----------------------------------------------------
Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores
 de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los 
valores de los tres objetos instanciados.

Quizz de arreglos y funciones de Javascript
*/


class Producto {
    constructor(codigo, nombre, precio){
        this.codigo=codigo
        this.nombre= nombre
        this.precio= precio
    }

    ImprimeDatos(){
        for (let propiedad in Producto){
    console.log (propiedad)
    }}

}

let objeto1 = new Producto("001","leche","$90")
let objeto2 = new Producto("002","tortilla","$20")
let objeto3 = new Producto("003","bollito","$15")

let carrito=[objeto1, objeto2, objeto3]

for (let i=0; i<carrito.length;i++){
    console.log(carrito[i])    
}


//resolución

let supermercado =[]

class Producto {
    constructor(nombre, precio, codigo){
        this.nombre=nombre;
        this.precio=precio;
        this.codigo=codigo;
    }

    imprimeDatos(){
        console.log(`El nombre del producto N°${i+1} es ${this.nombre}`);
        console.log(`El precio del producto es ${this.precio}`);
        console.log(`El codigo del producto es ${this.codigo}`);
        console.log(`====================================================`)
    }
}

for (i=0;i<3;i++){
    let nombre= prompt (`Ingrese el nombre del producto N°${i+1}`)
    let precio= prompt (`Ingrese el precio del producto`)
    let codigo= prompt ("ingrese el codigo del producto")

    supermercado.push(new producto(nombre, precio, codigo))
    supermercado[i].imprimeDatos();
}