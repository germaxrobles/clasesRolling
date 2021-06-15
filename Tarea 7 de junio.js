/*

**Nos piden realizar una agenda telefónica de contactos.**
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual
 a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos 
formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Las funciones serán:
------------------------

* aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar
 mas contactos indicar por pantalla.
x existeContacto(Conctacto): indica si el contacto pasado existe o no.
* listarContactos(): Lista toda la agenda
- buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
- eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o
 no por pantalla
- agendaLlena(): indica si la agenda está llena.
- huecosLibres(): indica cuántos contactos más podemos ingresar.
Usar LocalStorage para guardar la info de la agenda y para consultar sus datos

*/

//Agenda

let agenda = []

//clase Contactos

class contacto {
    constructor(nombre, numero){
        this.nombre=nombre
        this.numero= numero
    }
}


function aniadirContacto(nombre, numero){
    if(agenda.length<5){
        let nombre=prompt(`Ingrese el nombre del nuevo contacto`)
        let numero=prompt(`Ingrese el numero del nuevo contacto`)
        agenda.push(new contacto(nombre, numero))
    }else{
        console.log(`Lista de contactos llena`)
    }
}

function existeContacto(){
    
}

function listarContactos(){
    
    console.log("Contactos:")
    for (let i = 0; i < agenda.length; i++) {
    console.log (`${i+1} - ${agenda[i].nombre} - numero ${agenda[i].numero}`)
    }
    
}

//crear una variable igualada a lo q querramos (para no hardcodear)


