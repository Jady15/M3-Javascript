//var es una forma antigua de definir variables.

//var tiene un scope global, pudiéndose utilizar en cualquier parte del código sin importar dónde haya sido declarada.

var nombre = 'Isaac';

var nombre = 'Jared';

var nombre = 'Ana';

console.log(nombre);

// let es la forma moderna de declarar variable. No permite redeclarar variables.

// let tiene un scope de bloque, lo que significa que sólo vive en el bloque donde fue declarado.

let apellido = 'Luviano';

let apellido2 = 'Hernández';

apellido = 'Gómez';
console.log(apellido);

// const es una constante, no se puede reasignar el valor
const PI = 3.1416;

