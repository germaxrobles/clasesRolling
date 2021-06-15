//JSON

//EN UNA BASE DE DATOS SOLO SE PUEDE GUARDAR TEXTO O NUMEROS
// NO se pueden guardar METODOS ni FUNCIONES

//JavaScript Objet Notation (una forma de escribir los objetos de 
// JavaScript en texto plano)
//para poder enviar, recibir y almacenar información.

// Esto se debe a que los sistemas de almacenamiento como ser una base
//de datos no reconoce un lenguaje de programación como tal en este caso Js,
//pero también es aplicado a otros como phyton, ruby, c+ etc. pero todos
//reconocen que es texto

//JSON es usado por muchos lenguajes actualmente y se escribe:

let mensaje = {
    nombre: "Nombre del remitente",
    mail: "correro del remitente",
    asunto: "nombre de remitente",
}

//JSON

let mensaje = {
    "nombre": "Nombre del remitente",
    "mail": "correro del remitente",
    "asunto": "nombre de remitente",
}

//XML es otra forma de mandar informacion a los servidor pero no se usa mucho

//METODOS para convertir a texto un objeto

//JSON stringify: convierte a texto un objeto

let enTexto=JSON.stringify(mensaje)

//JSON parse: convierte una cadena de texto JSON a su formato original

let objeto= JSON.parse(enTexto)