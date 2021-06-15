//setInterval - ejecuta una accion cada x periodo de tiempo que nosotros definimos
//va con una funcion y se expresa en milisegundos

setInterval(function(){

    console.log(`Hola!`)

}   ,3000)

//clearInterval - detiene la funcion setInterval cuando ya no necesito que se siga ejecutando
//es un metodo que recibe como parametro el intervalo

clearInterval(intervalo)

let intervalo=null
let contador=0

function iniciarContador (){
    intervalo=setInterval(function(){
        console.log(contador)
        contador +=1 //poner += es lo mismo que poner contador+1
    },1000)

}

function pausarContador(){
    if(intervalo!==null){
        clearInterval(intervalo)
    }
}

function reiniciarContador(){
    pausarContador()
    contador=0
    console.clear()
    iniciarContador()
}

//setTiemout//se ejecuta solo un vez transcurrido el tiempo indicado
setTimeout(function(){
},2000)

function logIn(){
    setTimeout(function(){

        let usuario=document.getElementById(`UserText`).value
        if(usuario){
            alert(`Usuario logueado`)
        }else{
            console.error(`El usuario no se ingresó`)
        }
        document.getElementById(`UserText`).value=""
        document.getElementById(`UserText`).focus()
    },2000)
}

document.getElementById(`UserText`) //para traer elementos x su ID

document.getElementById(`UserText`).value //para traer el contenido del input
