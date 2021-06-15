// Estrutura condicional
// bucles

/*

Mientras condicion
    entonces accion

*/
/* 
let vecesSumar=10
let totalSuma=0

while (vecesSumar>0) {
    totalSuma+=1
    vecesSumar-=1
    console.log(`totalSuma: ${totalSuma} | vecesSumar: ${vecesSumar}`)
}

console.log(`Total=${totalSuma}`) */

//-------------------------------

let respuesta=`HELSINKI`
let acierto=false
let contador=0

while(contador < 3 && acierto===false){
    let respUsuario=prompt(`capital de Finlandia`)
    if(respUsuario.toUpperCase()===respuesta){
        acierto=true
        document.write(`acertaste!`)
    }
        contador ++
}

if (acierto===false) { 
    document.write(`respuesta incorrecta :c`)    
}
