//Redondear un numero abajo
console.log(Math.floor(45.89))

//Redondear numero arriba
console.log(Math.round(45.55))

//obtener el maximo de una lista de numeros
console.log(`El número máximo es: ${Math.max(1,2,3,4,5,6,7)}`)

//obtener el numero minimo
console.log(`El número mínimo es: ${Math.min(1,2,3,4,5,6,7)}`)

//obtener el entero de un numero
let numero=13.1313
console.log(parseInt(numero))
let decimal="9.123456789"
console.log(parseFloat(decimal))

//typeof(nombre de variable) sirve para saber que tipo de dato es

//elevar un numero a una potencia
let base=5
let exponente=3
console.log(`El numero ${base} elevado a la potencia ${exponente} es de ${Math.pow(base, exponente)}`)

//calcular raiz cuadrada
console.log(Math.sqrt(64))

//número aleatorio
console.log (Math.round(Math.random()* 10 ) )

//obtener un numero con dos decimales
decimal=parseFloat(decimal)
console.log(Math.round(decimal*100)/100)

//toFixed(2)convertir a string con decimales
console.log(decimal.toFixed(1))
//convertir ese numero a nucmero con decimales
let decimalString = parseFloat(decimal.toFixed(1))
console.log(decimalString)


