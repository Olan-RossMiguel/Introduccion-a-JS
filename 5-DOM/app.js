
//1. Captura de elementos en variables
/* const parrafo = document.getElementById("txt") */

//2. Creación de funciones
/* let modificar = () => {
    parrafo.innerText = "JavaScript DOM 🔥"
    parrafo.style.color = "tomato"
    parrafo.style.fontSize = "2rem"
    parrafo.style.textDecoration = "underline"
    parrafo.style.fontStyle = "italic"
} */




const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementById("buttomComment");
const boxComments = document.querySelector(".comentarios");
const fecha = new Date();
const hoy = fecha.toLocaleString();

// agrega el comentario
const comentar = (event) => {
    event.preventDefault();

    if (inputComment.value.trim() === "") return;

    // crea un nuevo comentario
    let nuevoComentario = document.createElement("li");
    nuevoComentario.classList.add("comentario-principal-usuario");

    nuevoComentario.innerHTML = `
        <div class="avatar">
            <img src="../img/sindrome.jpg" alt="img">
        </div>
        <div class="comentario">
            <div class="usuario-comentario">
                <div class="texto">
                    <a href="#" class="nombre-usuario">Sindromee</a> <span class="texto-comentario">${inputComment.value}</span>
                    <div class="menu-comentario">
                        <i class="fas fa-pen"></i>
                        <ul class="menu">
                            <li><a href="#" class="editar-comentario">Editar</a></li>
                            <li><a href="#" class="eliminar-comentario">Eliminar</a></li>
                        </ul>
                    </div>
                </div>
                <div class="botones-comentario">
                    <button class="boton-puntuar">
                        <i class="fas fa-thumbs-up"></i> 0
                    </button>
                    <button class="boton-responder">Responder</button>
                    <span class="tiempo-comentario">${hoy}</span>
                </div>
            </div>
        </div>
    `;

    // Agregar el comentario a la lista
    boxComments.appendChild(nuevoComentario);

    // Limpiar el input
    inputComment.value = "";
};

// Función para eliminar un comentario
const eliminarComentario = (event) => {
    event.preventDefault();
    const comentario = event.target.closest(".comentario-principal-usuario");
    if (comentario) {
        comentario.remove();
    }
};

// Función para editar un comentario
const editarComentario = (event) => {
    event.preventDefault();
    const comentario = event.target.closest(".comentario-principal-usuario");
    const textoComentario = comentario.querySelector(".texto-comentario");

    if (textoComentario && !comentario.querySelector(".input-editar")) {
        const textoActual = textoComentario.textContent.trim();

        // Crear un input para editar
        const inputEditar = document.createElement("input");
        inputEditar.type = "text";
        inputEditar.value = textoActual;
        inputEditar.classList.add("input-editar");

        // Crear un botón para guardar cambios
        const btnGuardar = document.createElement("button");
        btnGuardar.innerHTML = '<i class="fa-solid fa-paper-plane style"></i>'; // Correcto
        btnGuardar.classList.add("boton-guardar");

        // Asegúrate de añadir el botón y el input dentro del contenedor del comentario
        comentario.querySelector(".texto-comentario").replaceWith(inputEditar);
        inputEditar.after(btnGuardar);

        inputEditar.focus();

       
        btnGuardar.addEventListener("click", () => {
            const nuevoTexto = inputEditar.value.trim();
            if (nuevoTexto !== "") {
                textoComentario.textContent = nuevoTexto;
                inputEditar.replaceWith(textoComentario);
                btnGuardar.remove(); 
            }
        });

        // Guardar cambios al presionar Enter
        inputEditar.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                btnGuardar.click();
            }
        });
    }
};

// Eventos
btnComment.addEventListener("click", comentar);

// Delegación de eventos en el contenedor de comentarios
document.addEventListener("click", (event) => {
    if (event.target.closest(".eliminar-comentario")) {
        eliminarComentario(event);
    }
    if (event.target.closest(".editar-comentario")) {
        editarComentario(event);
    }
});
