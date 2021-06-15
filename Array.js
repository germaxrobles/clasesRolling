//array o arreglos
//lista

//mutacion de un arreglo
//metodos

let alumnos= [`Gerardo`, `Pablo`, `Fabrizio`, `Juan`]

// acceder a un elemento en el arreglo
alumnos[2]

//obtener el ultimo elemento
alumnos[alumnos.length-1]

//concatenar todos los elementos en un string
alumnos.join("|")

//Iterar o recorrer un arreglo
for (let i=0; i<alumnos.length;i++){
    console.log(alumnos[i])    
}

//agregar elementos al array
alumnos.push(`Jorge`)

//eliminar el último elemento
alumnos.pop()

//añadir un elemento al principio
alumnos.unshift(`Walter`)

//eliminar un elemento del principio
alumnos.shift()

//encontrar el indice de un elemento (si me retorna -1 es que el elemento no existe)
console.log( alumnos.indexOf(`dasd`))

//encontrar un elemento (retorna True si está o False si no)
console.log(alumnos.includes(`Gerardo`))

//Eliminar un elemento mediante su posicion (se agrego el (0) borra todo)
let pos=1
alumnos.splice(pos,2)

//concatenar arreglos  - no modifica las existentes sino que crea un array nuevo

let alumnas= [`maria`, `nahir`, `lucia`]

let comision= alumnos.concat (alumnas)

// ordenar por orden alfabetico (de la a al z) para q sea al reves .reverse
comision.sort( )


