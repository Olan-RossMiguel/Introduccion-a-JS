
//1. Seleccionar elementos del DOM
const charLength = document.querySelector("#charLength");
const lengthRange = document.querySelector("#lengthRange");

lengthRange.addEventListener("change", function (e) {
    charLength.textContent = e.currentTarget.value;
});

//2. Seleccionar elementos del DOM
const passwordOutput = document.querySelector("#passwordOutput");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");

//5. Generar arrays para letters, numbers, symbols
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
    "'", '"', ',', '<', '.', '>', '/', '?', '\\', '|', '`', '~'
];

//6. Crear un objeto "utils" para crear las funciones que generen los números aleatorios. 
const utils = {
    generateRandomBetween: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getCharsFromArray: function (array, num) {
        let chars = "";
        for (let i = 0; i < num; i++) {
            const randNumber = utils.generateRandomBetween(0, array.length - 1);

            if (typeof array[randNumber] === "string") {
                randNumber % 2 === 0 ? chars += array[randNumber].toLowerCase() :
                    chars += array[randNumber].toUpperCase();
            } else {
                chars += array[randNumber];
            }
        }
        return chars;
    }
};

// Función para actualizar la fortaleza de la contraseña
function actualizarFortalezaContrasena(contrasena) {
    const strengthIndicator = document.getElementById("strengthIndicator");

    // Verificar si la contraseña tiene números
    const tieneNumeros = numbers.some(num => contrasena.includes(num.toString()));

    // Verificar si la contraseña tiene símbolos
    const tieneSimbolos = symbols.some(simbolo => contrasena.includes(simbolo));

    // Verificar si la contraseña tiene letras (mayúsculas o minúsculas)
    const tieneLetras = letters.some(letra => contrasena.toLowerCase().includes(letra));

    // Longitud de la contraseña
    const longitud = contrasena.length;

    // Evaluar las condiciones
    if (longitud > 14 && tieneNumeros && tieneSimbolos && tieneLetras) {
        strengthIndicator.value = 100; // Óptimo
    } else if (longitud >= 8 && longitud <= 14 && tieneNumeros && tieneSimbolos && tieneLetras) {
        strengthIndicator.value = 75; // Alto
    } else {
        strengthIndicator.value = 30; // Bajo
    }
}

//3. Evento y la función del botón generate
function generatePassword() {
    //4. Capturar elementos que condicionan la password
    const passLength = lengthRange.value;
    const includeNumbers = document.querySelector("#numbers").checked;
    const includeSymbols = document.querySelector("#symbols").checked;

    //7. Guardar la contraseña generada
    let tempPassword = "";

    // Si el check numbers es true
    if (includeNumbers) {
        tempPassword += utils.getCharsFromArray(numbers, utils.generateRandomBetween(3, passLength / 3));
    }

    // Si el check symbols es true
    if (includeSymbols) {
        tempPassword += utils.getCharsFromArray(symbols, utils.generateRandomBetween(3, passLength / 3));
    }

    //8. Añadir letras a la tempPassword
    tempPassword += utils.getCharsFromArray(letters, passLength - tempPassword.length);

    //9. Para imprimir en pantalla una contraseña que alterne orden de números, letras y símbolos
    const contrasenaGenerada = tempPassword.split("").sort(() => Math.random() - 0.5).join("");
    console.log(contrasenaGenerada);

    // Mostrar la contraseña generada en el campo de salida
    passwordOutput.value = contrasenaGenerada;

    // Actualizar la fortaleza de la contraseña
    actualizarFortalezaContrasena(contrasenaGenerada);
}

// Evento para generar la contraseña
generateButton.addEventListener("click", generatePassword);

//10. Función para copiar la contraseña
function copiarPassword() {
    console.log("copiando.......");
    if (passwordOutput.value === "") return;
    const psCopy = passwordOutput.value;
    navigator.clipboard.writeText(psCopy);
}

// Evento para copiar la contraseña
copyButton.addEventListener("click", copiarPassword);