//FUNCION CONSTRUCTORA - crear objetos a par
// son plantilllas con las cuales podemos crear vrios objetos
// objetos con cosas en comun como sus PROPIEDADES o METODOS

function Movies ( titulo, sinopsis, director, reparto,){
this.titulo= titulo;
this.sinopsis= sinopsis;
this.director= director;
this.reparto= reparto;
}

//para agregar un metodo a la funcion constructora
// metodo 1
movies.prototype.listar= function () {
    console.log("titulo:", this.titulo)
    console.log("sinopsis:", this.sinopsis)
    console.log("director:", this.director)
    console.log("=====================")
}

//metodo2





let jurassic= new Movies(`Jurassic park`,
`dinosaurios clonados peligrosos`,
`Spilberg`, 
`juan, Jose, Francisco`,)

let avengers= new Movies(`Avengers`,
`heroes que salvan al mundo`,
`Perez`, 
`Gerardo, Maximiliano, Robles`,)

