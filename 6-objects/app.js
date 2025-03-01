/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
Objeto de muestra:
*/
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12,
//   };
//   values = Object.keys(student); // ['name', 'sclass', 'rollno']
//   console.log("Propiedades de student:");
//   for (let i = 0; i < values.length; i++) {
//     console.log(`${1 + i}.- ${values[i]}`);
//   }
  /**
   * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
      var student = {
          name: "David Rayy",
          sclass: "VI",
          rollno: 12
      };
  */
  // console.log("¿La propiedad name se encuentra dentro del objeto?");
  // console.log(student.hasOwnProperty("name"));

  
  let biblioteca = [
    {
        titulo: "El psicoanalista",
        autor: "John Katzenbach",
        anio: 2002,
        estado: "disponible",
        capitulos: ["Prólogo", "El paciente anónimo", "Miedo y paranoia"],
        describirLibro() {
            return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
        },
        agregarCapitulo(nombreCapitulo) {
            this.capitulos.push(nombreCapitulo);
        },
        eliminarCapitulo(nombreCapitulo) {
            let index = this.capitulos.indexOf(nombreCapitulo);
            if (index !== -1) {
                this.capitulos.splice(index, 1);
            } else {
                alert(`El capítulo "${nombreCapitulo}" no existe en el libro.`);
            }
        }
    },
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        anio: 1967,
        estado: "prestado",
        capitulos: ["Macondo", "José Arcadio Buendía", "El aliento del destino"],
        describirLibro() {
            return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
        },
        agregarCapitulo(nombreCapitulo) {
            this.capitulos.push(nombreCapitulo);
        },
        eliminarCapitulo(nombreCapitulo) {
            let index = this.capitulos.indexOf(nombreCapitulo);
            if (index !== -1) {
                this.capitulos.splice(index, 1);
            } else {
                alert(`El capítulo "${nombreCapitulo}" no existe en el libro.`);
            }
        }
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        anio: 1949,
        estado: "disponible",
        capitulos: ["El Gran Hermano", "El Ministerio de la Verdad", "La rebelión silenciosa"],
        describirLibro() {
            return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
        },
        agregarCapitulo(nombreCapitulo) {
            this.capitulos.push(nombreCapitulo);
        },
        eliminarCapitulo(nombreCapitulo) {
            let index = this.capitulos.indexOf(nombreCapitulo);
            if (index !== -1) {
                this.capitulos.splice(index, 1);
            } else {
                alert(`El capítulo "${nombreCapitulo}" no existe en el libro.`);
            }
        }
    }
];


function mostrarBiblioteca() {
    console.log("Lista de libros:");
    biblioteca.forEach(libro => {
        console.log(libro.describirLibro());
    });
}


function imprimir() {
    const cajaTexto = document.getElementById("infoLibro");

    if (!cajaTexto) {
        console.error("El elemento con id 'infoLibro' no existe.");
        return;
    }

    let contenido = "<h2>Lista de libros</h2><ul>";
    biblioteca.forEach(libro => {
        contenido += `<li>
            <strong>${libro.titulo}</strong> - ${libro.autor} (${libro.anio}) 
            - Estado: <em>${libro.estado}</em><br>
            <strong>Capítulos:</strong> ${libro.capitulos.join(", ")}
        </li>`;
    });
    contenido += "</ul>";

    cajaTexto.innerHTML = contenido;
}


function buscarLibro(titulo) {
    return biblioteca.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
}


function agregarCapitulo() {
    let tituloLibro = document.getElementById("tituloLibro").value;
    let nombreCapitulo = document.getElementById("nombreCapitulo").value;

    let libro = buscarLibro(tituloLibro);

    if (libro && nombreCapitulo.trim() !== "") {
        libro.agregarCapitulo(nombreCapitulo);
        alert(`Capítulo "${nombreCapitulo}" agregado a "${tituloLibro}".`);
        imprimir();
    } else {
        alert("Libro no encontrado o el nombre del capítulo está vacío.");
    }
}


function eliminarCapitulo() {
    let tituloLibro = document.getElementById("tituloLibro").value;
    let nombreCapitulo = document.getElementById("nombreCapitulo").value;

    let libro = buscarLibro(tituloLibro);

    if (libro && nombreCapitulo.trim() !== "") {
        libro.eliminarCapitulo(nombreCapitulo);
        alert(`Capítulo "${nombreCapitulo}" eliminado de "${tituloLibro}".`);
        imprimir();
    } else {
        alert("Libro no encontrado o el nombre del capítulo está vacío.");
    }
}

imprimir();
