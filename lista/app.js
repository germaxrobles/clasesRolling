//Repasar diapo DOM


let alumnos=[
    "Gerardo",
    "Maximiliano",
    "Juan",
    "José",
    "Pedro",
    "Pablo",
]
//las clases la llamo con un .clase
// los ID los llamo como #id
let tarjeta=document.querySelector(`.card-body`)
let tarjetaOrdena= document.querySelector("#card-ordenar")

//REDNERIZAR: pintar en PANTALLA un contenido
//funcion reutilizable
function listarAlumnos(array, contenedor){

    array.forEach(function(alumno){

        let parrafo=document.createElement(`p`)
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

listarAlumnos()
*/

card-ordenar