let nombre="Gerardo"
let apellido= "Robles"
let frase= "              Bienvenido a la clase    "

console.log (nombre, apellido)
console.log (nombre+ "    "+apellido)

//template string
console.log(`Mi nombre es ${nombre} ${apellido}`)

//métdos de los string
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())
console.log(nombre.length)
console.log(nombre.charAt(0))
console.log(apellido.substr(0,1))
console.log(frase.trim())
frase = frase.trim()

//traer la ultima letra del apellido
console.log(apellido.charAt(apellido.length-1))