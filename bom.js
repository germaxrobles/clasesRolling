//Browser Object Model (BOM)
//Browser Object Model Son todas las cosas relacionadas con el navegador. Son los objetos que están fuera de los documentos cargados
//No tiene un standart y no todos los navegadores poseen las mismas caracteristicas

//window
/*
EL objeto window representa la ventana que contiene un documento DOM
*/

//navigator

let browser, userAgent=navigator.userAgent

//si escribo una variable, otra=ejemplo, otra=ejemplo2 es valido
// es solo una forma de ahorrar lineas de codigo

if (userAgent.indexOf(`Chrome`)>-1){
    browser=`Google Chorme`
} else if (userAgent.indexOf(`Firefox`)>-1){
    browser=`Mozilla Firefox`
} else if (userAgent.indexOf(`Safari`)>-1){
    browser=`Apple Safari`
}

alert (`Usted está usando ${browser}`)

//location 
location.reload();//recargamos la pagina

//vamos a esa pagina perdiendo el historial
location.assign("http://google.com")

//vamos a otra pagina pero podemos volver para atras
location.replace("https://link.com")

//.search nos permite enviar informacion
function sendData(data){
    location.search=data;
}
sendData("hola")

//history nos permite movernos entre paginas en el historial 
histori.go(-1) //para volver
hostori.go(3)//avanza 3 pagina