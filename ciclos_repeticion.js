// Programa para mostrar los múltiplos de 5 hasta un número dado por el usuario

let numero = 50;

let contador = 1;

while( contador <= numero ) {
    if( contador % 5 === 0 ) {
        console.log(contador);
    }
    contador++; // Incremento del contador
}

console.log("FIN DEL PROGRAMA");

// Imprimiendo números impares hasta determinado número

let numero_2 = 35;

for(let indice = 0; indice <= numero_2; indice++) {
    if (indice % 2 !== 0) {
        console.log(indice);
    }
}

console.log("FIN DEL PROGRAMA");

// Imprimir los números del 1 al 10
let inicio = 1;
while(inicio <= 10) {
    console.log(inicio);
    inicio++;
}
console.log("FIN DEL PROGRAMA");

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("FIN DEL PROGRAMA");