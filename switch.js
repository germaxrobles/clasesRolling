// Estrutura condicional
//switch



let numero=12

switch (numero) {
    case 10:
        //accion
        console.log(`el numero es 10`)
        break;
        case 25:
            //accion
            console.log(`el numero es 25`)
            break;
            case 3:
                //accion
                console.log(`el numero es 3`)
                break;
    default:
        console.log(`el numero es de otro valor`)
        //si ninguan condicion se cumple entonces default, esta condicion puede estar o no
        break;
}

//-------------------------------

let diaNumero = new Date().getDay()

switch (diaNumero) {
    case 0:
        console.log(`Hoy es Domingo`)
        break;
    case 1:
        console.log(`Hoy es lunes`)
        break;
    case 2:
        console.log(`Hoy es martes`)
        break;
    case 3:
        console.log(`Hoy es miercoles`)
        break;
    case 4:
        console.log(`Hoy es jueves`)
        break;
    case 5:
        console.log(`Hoy es viernes`)
        break;
    default:
        console.log(`Hoy es sabado`)
        break;
}

//---------------------------------

let comando=prompt(`Ingrese un comando (alerta, consola print)`)

switch (comando) {
    case `alerta`:
        alert(`usando switch en un alert`)
        break;
    case `consola`:
        alert(`usando switch en la consola`)
        break;
    case `print`:
        document.write(`usando switch en el navegador`)
        break;
    default:
        console.error(`No existe ese comando`)
        break;
}