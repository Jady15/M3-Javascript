// Función que retorna la suma entre dos números recibidos
function sumar (numero1, numero2) {
    let total = numero1 + numero2;
    return total;   // Return permite guardar el resultado en una variable
}

// Llamando a la función
let resultado = sumar(10,10);

console.log(resultado);
console.log(sumar(12,20));

sumar(2,3);

// Función para concatenar dos cadenas para devolver un saludo
function saludar(nombre) {
    console.log("Hola, bienvenido/a " + nombre);
}

saludar("Carolina");
saludar("Isaac");

console.log(sumar(2,3));

function restar(a, b){
    let total = a - b;
    console.log(total); // Sólo se imprime el resultado en consola, no se guarda
}

restar(13,2);

function Casita(){
    let nombre = 'Jared'; // Variable local
    let apellido = 'Hernández';
    console.log("Esta es una casita.");
}

Casita();

// console.log(nombre);    // No es accesible porque está dentro de una función (Scope de bloque)

let nombre = "Isaac"    // Variable global
let edad = 23;
let ciudad = "Ciudad de México";

console.log("Él se llama " + nombre + ", tiene " + edad + " años y vive en " + ciudad);
console.log(`Él se llama ${nombre}, tiene ${edad} años y vive en ${ciudad}`);

let usuario = prompt("¿Cuál es tu nombre?");
let gatos = prompt("¿Cuántos gatos tienes?");
let perros = prompt("¿Cuántos perros tienes?");
let totalMascotas = parseInt(gatos) + parseInt(perros);

console.log(`${usuario} tiene ${gatos} gatos y ${perros} perros`);

alert(`${usuario} tiene ${gatos} gatos y ${perros} perros`);

document.write(`${usuario} tiene ${gatos} gatos y ${perros} perros`);

// En total tiene x mascotas

alert(`En total tiene ${totalMascotas} mascotas`);

document.write('<br>');
document.write(`En total tiene ${totalMascotas} mascotas`);