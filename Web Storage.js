//Es una caracteristica de html 5 que nos permite almacenar datos en el
//navegador del usuario

//2 tipos | LOCAL STORAGE | SESSION STORAGE

/*
Metodos y propiedades de localstorage
clear()elimina toda la info almacenada
setItem(clave,valor) guarda una clave determinada, y un valor asignado a esta
getItem(clave) obtiene un dato determinado 
lenght nos permine conocer el total de claver almacenadas x la app
*/ 

let userJSON=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
]

//guardar el objeto en cuestion
//no
localStorage.setItem(`usuarios`,userJSON)
//si
localStorage.setItem(`usuarios`,JSON.stringify(userJSON))

//recuerpar = traer del localStorage para ser usado
//No (devuelve pero de forma no usable)
let usuarios=localStorage.getItem(`usuarios`)
//si (primero tengo q "convertirla" para poder usarla)
usuarios=JSON.parse(localStorage.getItem(usuarios))

//Base de datos de usuario

let userJSON=[

]

//1ro crear el arreglo donde almacenaré los datos

let usuarios=JSON.parse(localStorage.getItem(`usuarios`)) || []

//creo una clase para crear los objetos

class Usuario{
    constructor(name, username, email, password){
        this.name = name
        this.username = username
        this.email = email
        this.password = password
    }
}

function addUser (name, user, email, password){
    usuarios.push(new Usuario (name, user, email, password))

    localStorage.setItem(`usuarios`, JSON.stringify(usuarios))

}

//nuevo metodo para LISTAR

function listUsers(){
    Usuarios.array.forEach(function (Usuario){

        console.log(`Nombre: ${usuario.name}`)
        console.log(`usuario: ${usuario.username}`)
        console.log(`email: ${usuario.email}`)
        console.log(`===========================`)
    })
}

//metodo para listar solo un elemento
function listUser(username){
    let user=usuarios.find(function(usuario){
        return usuario.username===username
    })

    if (user) {
        console.log(`Nombre: ${usuario.name}`)
        console.log(`usuario: ${usuario.username}`)
        console.log(`email: ${usuario.email}`)
        console.log(`===========================`)
    } else {
        console.warn ("el usuario no existe")
    }
}

//para eliminar el usuario
function delUser(username){
    let idUser=usuarios.findIndex(function(usuario){
        
        return usuario.username===username

    })

    if(idUser>-1){
        let validar=confirm(`esta seguro que quiere eliminar el usuario?`)

        if(validar){
        usuarios.splice(idUser,1)
        localStorage.setItem(`usuarios`, JSON.stringify(usuarios))
        console.log ("el usuario a sido borrado")
        }
    }else{
        console.warn("el usuario no existe")
    }

}

//traemos la informacion del localStore, la trabajamos y luego la subimos de nuevo

