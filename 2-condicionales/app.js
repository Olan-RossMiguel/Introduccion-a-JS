
/* confirm("¿Quieres jugar a condicionales?")

console.log("SACREBELU") */

//Var

/* var color = "Amarillo"
//Se reasigna la variable
var color = "Blue"
console.log(color) */

//let

/* let nombre = "Carlos"
nombre = "Luis"
console.log(nombre) */

/* let fruta //no se le asignado un valor

//pero luego se le puede agregar
fruta = "piña"
console.log(fruta)
 */

//const

/* const color = 'Blanco'
color = 'verde' // No es permitido
console.log(color) */

//Operadores matemáticos

/* let shots = 3
console.log(6 + 4 + 23)

console.log("Tus shots son: " , shots)

let msj = "Tus shots son: " + shots

let num1  */


//cohersión = obligar a un tipo de dato a volverse a otro tipo de dato

/* let color = prompt("dime un color").toLowerCase()
if( color === "azul" ){
    console.log("Adivinaste el color! 😊")
}else if(color === "rojo"){
    console.log("Te ganaste una fresa")
}else if(color === "amarillo"){
    console.log("Te ganaste una piña")
}else{
    console.log("Perdiste :(")
} */

    //Entregable

    let nota = prompt("Escribe tu nota: ")

   
    nota = Number(nota)
    
    if (!isNaN(nota)) { 
        if (nota < 0 || nota > 100) {
            console.log("⚠️ La nota debe estar entre 0 y 100")
        } else if (nota >= 90) {
            console.log("¡Excelente! 👏🏻")
        } else if (nota >= 75) {
            console.log("¡Bien! 👌🏻")
        } else if (nota >= 60) {
            console.log("¡Suficiente! 👍🏻")
        } else {
            console.log("¡No aprobaste! 🙅🏻‍♂️")
        }
    } else {
        console.log("⚠️ Ingresa un número válido.");
    }
    
    