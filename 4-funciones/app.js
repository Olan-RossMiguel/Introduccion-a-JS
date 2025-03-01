// function auto(ruedas, carcasa) {
//     console.log(`Este auto tiene ${ruedas} ruedas y ${carcasa} carcasa`);

    
// }

// auto(4, 1)

function sumar() {
    let a = parseFloat(prompt("Ingresa el valor de a:")); // Convertir a número
    let b = parseFloat(prompt("Ingresa el valor de b:")); // Convertir a número
    
    return a + b; // Retornar la suma
}



// function restar(a, b) {

//     return a - b;

// }

// function multiplicar(a, b) {

//     return a * b;

// }

// function dividir(a, b) {

//     if (b === 0) {

//         return "Error: División por cero";

//     }

//     return a / b;

// }

// Llamadas a las funciones

// console.log("Suma: " + sumar());

// console.log("Resta: " + restar(5, 3));

// console.log("Multiplicación: " + multiplicar(5, 3));

// console.log("División: " + dividir(5, 0));


let librosLeidos = [];

function agregarLibro() {
    let books = prompt("Escribe el título del libro que has leído (o 'salir' para terminar)");

    while (books.toLowerCase() !== "salir") {  
        librosLeidos.push(books);
        books = prompt("Escribe el título del libro que has leído (o 'salir' para terminar)");
    }
}

function mostrarLibro(array) {
    if (array.length === 0) {
        console.log("No has agregado ningún libro.");
    } else {
        let listaLibros = "<h1>Libros leídos:</h1><ul>";
        for (let i = 0; i < array.length; i++) {
            listaLibros += `<li>${i + 1}.- ${array[i]}</li>`;
        }
        listaLibros += "</ul>";

        document.body.innerHTML += listaLibros; 
    }
}


agregarLibro();
mostrarLibro(librosLeidos);
