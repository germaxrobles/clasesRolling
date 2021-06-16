
//primero declaro las variables globales más importantes

let agenda=JSON.parse(localStorage.getItem('agenda'))||[]
let memo=10

class Contacto{
    constructor(nombre, telefono){
        this.nombre=nombre;
        this.telefono=telefono;
    }
}

//agregar registros de la agenda

function addContact(){

    let nombre=document.querySelector('#nombreText')
    let telefono=document.querySelector('#telefText')

    if(!nombre.value || !telefono.value){

        alert('Faltan datos')
        nombre.focus();
    }else{
        let verify=verifyContact(nombre.value)
        if(verify){
            alert('El contacto ya existe en su agenda')
        }else{
            if(memo>0){
                agenda.push(new Contacto(nombre.value.toUpperCase(),telefono.value))
                //value es sirve para acceder al valor del campo
                localStorage.setItem('agenda',JSON.stringify(agenda));
                memo-=1
            }else{
                alert("Memoria llena, elimine algunos contactos")
            }
        }
    }updateAgenda()

}

function verifyContact(nombre){
    let verify=agenda.find(function(contacto){
        return contacto.nombre.toLowerCase()===nombre.toLowerCase()
    })

    if(verify){
        return true;
    }else{
        return false;
    }

}

function updateAgenda(){
    
    document.querySelector('#nombreText').value=""
    document.querySelector('#nombreText').focus()
    document.querySelector('#telefText').value=""

    agenda=JSON.parse(localStorage.getItem("agenda"))

    cargarTabla(agenda)

}

function cargarTabla(array){

    //primero limpiar la tabla para evitar que se duplique cada vez que se agrega un contacto
    document.querySelector('#cuerpoTabla').innerHTML=``
    array.forEach(function(elemento, index){

        let fila=document.createElement('tr')
        fila.classList='text-center'
        //CLASLISTO es una perpiedad que me permite mandar las clases
        //nos permite agregar clases al componente que acabamos de crear (se pueden agregar varias)

        let datos=`
        <td>${elemento.nombre}</td>
        <td>${elemento.telefono}</td>
        `
            //Creo los elementos primero, luego inyecto los datos obtenidos
        fila.innerHTML=datos
            //innertHTML para etiquetas contenedoras
            //innerText para etiquetas no contenedoras (<p>) ejemplo parrafo o titulo

            //luego tengo que mandar esos datos a la pantalla
        let cuerpo= document.querySelector('#cuerpoTabla')
        cuerpo.appendChild(fila)

    })
}

cargarTabla(agenda)