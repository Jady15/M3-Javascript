let frutas = ['Fresa', 'Sandía', 'Manzana', 'Pera', 'Naranja', 'Sandía', 'Manzana', 'Fresa'];
let cont = 0;
for(let i = 0; i < frutas.length; i++) {
    for(let j = 0; j < frutas.length; j++) {
        if(frutas[i] === frutas[j]) {
            cont++;
        }
    }
    console.log("La cantidad de la fruta",frutas[i],"es:");
    console.log(cont);
    cont = 0;
    console.log("---------------------------");
}