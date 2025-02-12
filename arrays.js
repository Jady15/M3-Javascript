let personas = [];  // Arreglo vacío

let verduras = ['Lechuga', 'Tomate', 'Cebolla', 'Jitomate', 'Papa', 'Pimiento'];    // Arreglo con datos

console.log(verduras[2]);

// Recorriendo los elementos de un arreglo
for(let i = 0; i < verduras.length; i++){
    console.log(verduras[i]);
}

personas.push('Isaac'); // Insertando un elemento
personas.push('Diego');
personas.push('Ana');
personas.push('Ángel');
console.log(personas);

personas.pop();     // Elimina el último elemento del arreglo
console.log(personas);

personas.unshift('Alex');   // Inserta un elemento al inicio del arreglo
personas.unshift('Yolanda');
console.log(personas);

personas.shift();   // Elimina el primer elemento del arreglo
console.log(personas);

