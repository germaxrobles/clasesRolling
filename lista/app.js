//Repasar diapo DOM


let alumnos=[
    "Gerardo Robles",
    "Maximiliano Robles",
    "Juan Alonso",
    "José Olivera",
    "Pedro Ponce",
    "Pablo Marino",
]
//las clases la llamo con un .clase
// los ID los llamo como #id
let tarjeta=document.querySelector('.card-body')
let tarjetaOrdena= document.querySelector('#card-ordenar')

//REDNERIZAR: pintar en PANTALLA un contenido
//funcion reutilizable
function listarAlumnos(array, contenedor){

    array.forEach(function(alumno){

        let parrafo=document.createElement('p') //entre () ponemos el elemento que queremos crear
        parrafo.innerText=alumno

        return contenedor.appendChild(parrafo)

    })       
}

listarAlumnos(alumnos, tarjeta)

//funcion NO REUTILIZABLE o personalizada
/*
function listarAlumnos(){

    alumnos.forEach(function(alumno){

        let parrafo=document.createElement(`p`)
        parrafo.innerText=alumno

        return tarjeta.appendChild(parrafo)

    })       
}
*/
listarAlumnos()


//obtener nombre y apellido. Listar el apellido y el nombre

function intercalarNombre(lista){

    let newList = lista.map(function(item){
        let espacio=item.indexOf(" ")
        let nombre = item.slice(0,espacio)
        let apellido = item.slice(espacio+1, item.length)

        return `${apellido} ${nombre}`

    })
}
/*
function ordenarAlumnos(){

    limpiarLista();
    let alumnosOrdenados = intercalarNombre(alumnos).sort();

    listarAlumnos(alumnosOrdenados,tarjetaOrdena)

}

function ordenarAlumnosZ(){

    limpiarLista();
    let alumnosOrdenados = intercalarNombre(alumnos).sort().reverse;

    listarAlumnos(alumnosOrdenados,tarjetaOrdena)

}
*/

function limpiarLista(){
    tarjetaOrdena.innerHTML=' '
}

//REfactorizacion

function ordenarLista(orden){
    limpiarLista()
    let alumnosOrdenados= []

    if(orden==='az'){
        alumnosOrdenados=intercalarNombre(alumnos).sort();
    }
    if(orden==='za'){
        alumnosOrdenados=intercalarNombre(alumnos).sort().reverse();
    }
    listarAlumnos(alumnosOrdenados, tarjetaOrdenada)
}

