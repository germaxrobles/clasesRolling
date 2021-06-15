//DATOS del objeto = PROPIEDADES
//FUNCIONALIDAD la llamaremos = METODOS (los metodos son funciones)
// podemos crear un objeto que tenga propiedades solamente, o propiedades y metodos
// Los objetos siempre tienen propiedades pero NO SIEMPRE métodos
// los métodos hacen referencia al objeto, solo pueden ser usados en el objeto para el q fueron creadas - se ve como una función normal pero no existe en el scope global sino solo en el objeto

// POO Programación orientada a objetos
// las propiedasdes se definen despues de los :
let auto={
    color:`red`,
    marca: `Fiat`,
    modelo: `Palio`,
    anio: 2008,
    encendido: false,
        encenderApagar:function(){

            // THIS hace referencia al mismo objeto, sería como poner auto.encendeido
            this.encendido=!this.encendido
            if(this.encendido){
                console.log(`EL vehiculo esta encendido`)
            }else{
                console.log(`el vehiculo esta apagado`)
            }
        }   
}

//para llamar al objeto con el metodo sería auto.encenderApagar()

//En un metodo dentro de un objeto tambien puedo recibir parametros

let alumno = {
    nombre: "Carlos",
    edad: "40",
    dni: "31458265",
    curso: "fullstack",
    saludar: function (nombre=this.nombre){
        console.log(`hola, mi nombre es ${nombre}`)
    }

}

//puedo llamar a los metodos con un . pero tambien con corchetes ej: alumno[`edad`]

// para AGREGAR una propiedad x consola es tan facil como
// llamar al objeto.nuevaPropiedad=nuevoValor

// para BORRAR una propiedad delete objeto.propiedad

// ITERAR propiedades de un objeto y mostrarlos en una lista como si fuera un array
// con un for in

for (let propiedad in alumno){
    console.log (propiedad)
}

O

for (let propiedad in alumno){
    console.log (`${propiedad}: ${alumno[propiedad]}`)
}

//podemos tener ARREGLOS de objetos

let alumnos= [
    {nombre: "julio" , curso:"fullstack"},
    {nombre: "martin" , curso:"fullstack"},  
    {nombre: "maria" , curso:"fullstack"},
]

//para llamar un objeto puntual dentro de un arreglo uso su posicion

alumnos[0]

// para solicitar a los valores de una propiedad de un objeto dentro de un array uso .propiedad

alumnos[0].nombre

// para iterar uso un for

for (let i = 0; index < alumnos.length; i++) {
    
    console.log(`Nombre: ${alumnos[i].nombre} - ${alumnos[i].curso}`)
    
}