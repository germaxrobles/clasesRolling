
let nombre="gerardo"
let apellido= "robles"

/*
Usando métodos matemáticos
------------------------------------------------
**Tarea 1 - Capitalizar el Nombre**  */

console.log(nombre.charAt(0).toUpperCase())
console.log(nombre.substr(1,99))

console.log(nombre.charAt(0).toUpperCase()+nombre.substr(1,99))
console.log(apellido.charAt(0).toUpperCase()+apellido.substr(1,99))

console.log(`En nombre ingresado es ${nombre.charAt(0).toUpperCase()}${nombre.substr(1,99)} ${apellido.charAt(0).toUpperCase()+apellido.substr(1,99)}`)


/*
**Tarea 2**

- Ingresar 3 números
- indicar cual es el mayor
- indicar cual es el menor
- obtener la raíz cuadrada del segundo número

 */


let numero1=10
let numero2=20
let numero3=30

console.log(`El número máximo es: ${Math.max(numero1,numero2,numero3)}`)
console.log(`El número mínimo es: ${Math.min(numero1,numero2,numero3)}`)

console.log(Math.sqrt(numero2))
