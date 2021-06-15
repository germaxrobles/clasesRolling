//callbacks
//son funciones que se envian como parametros y se ejecutan despues de un metodo. como los metodos de los arreblos
// iterar=recorrer

// let numeros : [2,5,6,13,24]

let numerosOrdenados =numeros.sort(function (num1, num2) {
    return num1 - num2
})

// filter - devuelve todos los resultados, itera el array completo (no crea un nuevo array)

let pares = numeros.filter(function (num){
    return num %2===0
})

// find - devuelve el primer resultado, es como una busqueda rapida (no crea un nuevo array)

let alumnos = ["lucas", "pablo", "fabrizio", "jorge"]

alumnos.find(function (alumno){
    return alumno === "fabrizio"
})

//map devuele un arreglo nuevo con el resultado de la funcion que llamada como callback
//aplicando a cada elemento del arreglo el preceso indicado, y formando uno nuevo
// es una buena practica NO MODIFICAR EL ARREGLO ORIGINAl (mutar=modificar NO es buena practica)


let numerosDobles=numeros.map(function(num){
    return num*2
})

