// Tipo de mascotas = Gato, Perro, Hámster

// Condicionales (Jaula mediana, Jaula grande, Jaula pequeña)

// let tipoMascota = "Perro";

// if ( tipoMascota === "Perro") {
//     console.log("Si tienes un perro, necesitas la jaula grande");
// } else if ( tipoMascota === "Gato") {
//     console.log("Si tienes un gato, necesitas la jaula mediana");
// } else if ( tipoMascota === "Hamster") {
//     console.log("Si tienes un hamster, necesitas la jaula pequeña");
// } else {
//     console.log("No contamos con jaulas para esa mascota");
// }


// Semaforo color = Rojo, Amarillo, Verde
// Roja = Alto, Amarillo = Detente, Verde = Siga

// let colorSemaforo = "Azul";
// if ( colorSemaforo === "Rojo") {
//     console.log("Alto");
// } else if ( colorSemaforo === "Amarillo") {
//     console.log("Detente");
// } else if ( colorSemaforo === "Verde") {
//     console.log("Siga");
// } else {
//     console.log("No es un color de semáforo");
// }

// Para poder obtener una beca
let creditos = 10;
let promedio = 6.5;

if (creditos >= 10 && promedio >= 8.5) {
    console.log("Tienes derecho a una beca");
} else {
    console.log("No tienes derecho a una beca");
    if (creditos < 10) {
        console.log("Te hacen falta créditos.");
    }
    if (promedio < 8.5) {
        console.log("Tu promedio debe subir.");
    }
}