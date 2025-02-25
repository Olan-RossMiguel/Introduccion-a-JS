

// document.write("Las frutas verdes son: " + msj)

/* let num = 1

while (num <= 10){
    console.log( `20x${num} = ${20*num}` );
    num++
} */

/* for(let i= 1; i<=10; i++){
    console.log( `1x${i} = ${1*i}` );
} */

    // let colores = ["azul", "violeta", "naranja", "rojo", "amarillo"]

    // for (let i= 0; i <= colores.length; i++) {
    //     /* const element = colores[i]; */
    //      console.log(`${i+1}.- ${colores[i]}`);
        
    // }


    let frutas = [
        {   nombre: "Manzana", 
            color: "Verde" 
        },
        {   nombre: "Toronja", 
            color: "Naranja" 
        },
        {   nombre: "Naranja", 
            color: "Naranja" 
        },
        {   nombre: "Fresa", 
            color: "Rojo" 
        },
        {   nombre: "Mango", 
            color: "Amarillo" 
        },
        {   nombre: "Piña", 
            color: "Amarillo" 
        },
        {   nombre: "Papaya", 
            color: "Naranja" 
        },

        
    ];

    let tablaFrutas = document.getElementById("tablaFrutas");
    let tablaClasificada = document.getElementById("tablaClasificada");
    let totalFrutas = 0;
    let totalClasificada = 0;

   
    for (let i = 0; i < frutas.length; i++) {
        let fruta = frutas[i];

       
        let fila = `<tr>
                        <td>${i + 1}</td>
                        <td>${fruta.nombre}</td>
                        <td>${fruta.color}</td>
                    </tr>`;
        tablaFrutas.innerHTML += fila;
        totalFrutas++;

       
        if (fruta.color === "Naranja") {
            tablaClasificada.innerHTML += fila;
            totalClasificada++;
        }
    }

    
    document.getElementById("totalFrutas").innerText = totalFrutas;
    document.getElementById("totalClasificada").innerText = totalClasificada;

    
    