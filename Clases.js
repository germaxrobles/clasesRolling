// CLASES son contenedores que va a definir las propiedades y los metodos que tendran 
//los obj a partir de este

//INSTANCIAS se llamá así a todos los objetos deribados de una clase o una 
//funcion constructora o clase

//funcion constructoria => plantilla (objetos con sus propiedades y metodos)

//para crear una clase usamos la palabra reservada class
// con la primera en mayuscula

class Persona {
    //constructor solo define las propiedades
    constructor(nombre, apellido){
        this.nombre=nombre
        this.apellido= apellido
    }
    //luego definimos los metosdos, fuera de constructor pero dentro de class
    saludar(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
    }

}

let persona = new Persona( "fabrizio", "tonin")
let persona2 = new Persona( "carlos", "rodrigez")

//herencia es util para la reutilizacion del codigo xq reutiliza las propiedades y metodos 
// de otra clase llamada clase padre/madre

// extends palabra clave que se utliliza para crear una clase secundaria de otra principal

class profesor extends Persona{

    constructor (nombre, apellido, materia){
    //Super representa a la clase padre
    super(nombre,apellido);
    //luego agregamos la variante de forma usual
    this.materia=materia
    //cada vez que hago referencia a una propiedad dentro del objeto debo usar THIS.
    }

    presentacion(){

        console.log(`Buen día juntos aprenderemos ${this.materia}`)

    }

}

//nota: el super()metordo se refiere a la clase principal. AL llamar al super()metodo
//en el metodo constructor, llamamos al metodo constructor del padre y 
//obtenemos acceso a las propiedades y metodos del padre

let profe1=new Profesor ("fabrizio", "Tonin", "React Native")

//TAREA cuenta bancaria
// escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// *una propiedad titular con el valor "ALex"
// *una propiedad saldo, teniendo como valor inicial 0
// un metodo ingresar() que permita añadir dinero a la cuenta, pasando la cantidad
// un metodo extraer() que permita retirar la cantidad pasada como parametro
// un metodo informar() que retorne la informacion del estado de la cuenta.
// utiliza este objeto para mostrar la descripcion, ngresar y extraer dinero y volver a mostrar la descripcion del estado de la cuenta

class Cuenta{

    constructor(titular, saldo=0) {
        this.titular=titular;
        this.saldo=saldo;
    }

    ingresar(valor){
        if(valor<=0){
            console.error("ingesar un valor mayor q 0")
            return;
        }
        this.saldo+=valor
        //this.saldo=this.saldo + valor
        this.informar()
        //
    }

    etraer(valor){
        this.saldo -= valor;
        //this.saldo=this.saldo - valor
        //para impedir q saque más de lo q tiene
        if(valor>this.saldo){
            console.warn(`Solo puede extraer hasta ${this.valor}`)
            return;
        }
    }

    informar(){
        console.log(`titular: ${this.titular}`)
        console.log(`saldo: ${this.saldo}`)
    }

}

let cuenta1=new Cuenta("Alex")


