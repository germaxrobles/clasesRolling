let opciones = [`PIEDRA`, `PAPEL`, `TIJERA`]
let jugador = null
let bot= null

function playGame() {
    //lo que decirda la computadora
    //lo que decida el jugador
    console.log("Juego en acción")
    seleccionBot()
    seleccionJugador()
}

function seleccionBot(){
    //definir la opcion elegida por el bot
    return bot=Math.round(Math.random()*2)
}

function seleccionJugador(){
    //manejo lo que decida el jugador
    jugador=parseInt(prompt(`ingrese su opción: 0 = PIEDRA | 1 = PAPEL | 2 = tijera`))
    if (!isNaN(jugador)){
        if(jugador>=0&&jugador <=2){

            switch (true) {
                case jugador===bot:
                mensajeAlert(`EMPATE`)
                    break;
                case jugador===0 && bot===2:
                    mensajeAlert(`GANASTE`)
                    break;
                    case jugador===1 && bot===0:
                    mensajeAlert(`GANASTE`)
                    break;
                    case jugador===2 && bot===1:
                    mensajeAlert(`GANASTE`)
                    break;
                default:
                    mensajeAlert(`PERDISTE`)
                    break;
            }

        }else{
            //cuando es otro numero
            mensaje.alert(`noOpcion`)
        }


    }else{
        //cuando no sea un numero
        mensaje.alert(`noNumero`)
    }
}

function mensajeAlert(resultado){
    //devuelve el mensaje en pantalla
    if(resultado===`noOpcion`){
        swal("ERROR!", "No existe la opción elegida", "error");
    }
    if(resultado===`noNumero`){
        swal("ERROR!", "debe ingresar un numero entre 0 | 1 | 2 ", "error");
    }
    if(resultado===`GANASTE`){
        swal("GANASTE", `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`, "success");
    }
    if(resultado===`PERDISTE`){
        swal("PERDISTE", `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`, "error");
    }
    if(resultado===`EMPATE`){
        swal("EMPATASTE", `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`, "info");
    }
    
}