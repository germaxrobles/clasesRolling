// Crear una aplicación de changuito de compras donde se ingresen productos
// como elementos en un array
//
// - Las tareas que debe hacer son las siguientes:
//  - Agregar producto al carrito *
//  - Listar los productos del carrito *
//  - Buscar un producto en el carrito *
//  - Filtrar productos según una palabra *
//  - Eliminar producto del carrito *

let carrito = ["LECHE", "PAN", "AZUCAR", "EDULCORANTE"];

function agregar(){
    
    let producto=prompt("ingrese un producto")
    //forma1
    //VALIDAR puesto así el if revisa si es nulo o vacío (true false)
    if (producto){
    carrito.push(producto.toLocaleUpperCase);
    }

    //forma2 Trim elimina los espacios vacíos del string
    while (producto){
        carrito.push(producto.trim(). toLocaleUpperCase)
        producto=prompt("ingrese un producto")
    }
    
}


function listar (){

    //forma1
    console.log("Productos del carrito")

    for (let i = 0; i < carrito.length; i++) {
        console.log (`${i+1} - ${carrito[i]}`)
        
    }

    //forma2
    carrito.map(function(producto,index)){

        console.log (`${index+1} - ${producto}`)
    }

    //si no hay nada?

}

function buscar(){

    let producto=prompt("ingrese un producto a buscar")
    //escrito así el if valida si el producto es nulo o vacío
    if (producto)){
        //para buscar dentro de un arreglo podemos usar el metodo .includes
        let resultado=carrito.includes(producto.trim().toUpperCase())
        //poniedno el if así evaluo si la condicion es true o false
        if (resultado){
            console.log(`El producto ${producto.trim().toUpperCase()} esta en el carrito`)
        }else{
            console.warn(`El producto no exite`)
        }
    } else{
        console.log("no se ingresó un producto")
    }

}

function Filtrar (){

    let producto=prompt(`ingrese el producto o palabra que quiera buscar`)

    if (producto){
        
        let filtrados=carrito.filter(function(produc){
            // siempre el filter devuelve un retiurn xq el return hace q se acabe el proceso y guarde en el nuevo arreglo

            return produc.indexOf(producto.trim().toUpperCase()) >-1

        })

        if (producto.length >0){
            return filtrados
        }else{
            console.log ("No se encontró ningun producto con los parametros de busqueda")
        }


    } else{
        console.log(`Campo vacío o cancelado`)
    }

}

function Eliminar(){
    let eliminar=prompt(`ingrese el numero del producto a eliminar`)

    if(eliminar){

        pos=parseInt(eliminar)

        let producto=carrito[eliminar-1]

        if(producto!==undefined){
        if(validar){

            //confirm es una funcion de confirmacion de una accion aceptar=true cancelar=flase
            let validar=confirm(`esta seguro de elimnar el ${producto}`)
           carrito.splice(eliminar-1,1)
           console.log(`Eliminado el producto ${producto}`) 
        
        }else{
            console.log(`No hay producto con esa numeracion`)
        }

    }else{
        console.error( `no se pudo eliminar`)
    }

}


listar()