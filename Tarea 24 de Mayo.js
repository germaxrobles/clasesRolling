//objeto llamado persona

let persona = {
    nombre: "Gerardo",
    edad: 30,
    DNI: 123345678,
    Domicilio: "Azcuenaga 2166",
    hijos: "no tiene",
    profesión: "Diseñador",
    saludar: function(){
        console.log(`Hola, mi nombre es ${this.nombre}`)
    },
    listaDatos: function(){
        for(let propiedad in persona)
        console.log(`${propiedad}: ${persona[propiedad]}`)
    }
}

// arreglo de objetos que contenga datos de peliculas

let calificaciónPeliculas= [
    {título: "Gosth in the shell", genero:"ciencia ficcion - futuro distopico", año:2015},
    {título: "día del soldado", genero:"accion", año:2020},
    {título: "drive", genero:"roadmovie", año:2012},
    {título: "it", genero:"terror", año:1995},
]

function listaPelis(){
    for (let i=0; i<calificaciónPeliculas.length;i++){
        console.log(calificaciónPeliculas[i])    
    }
}


