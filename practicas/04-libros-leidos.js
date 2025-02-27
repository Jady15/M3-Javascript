
let librosLeidos = [];

// Agregar libros a la lista
function agregarLibro(tituloLibro) {
    librosLeidos.push(tituloLibro);
}

agregarLibro("El principito");
agregarLibro("Las mujeres que amaban demasiado");
agregarLibro("Los 7 esposos de Evelyn Hugo");

console.log(librosLeidos);
console.log("-------------------------------------");
// Mostrar los libros leídos
function mostrarLibrosLeidos() {
    for(let inicio = 0; inicio < librosLeidos.length; inicio++) {
        console.log(librosLeidos[inicio]);
    }
}

mostrarLibrosLeidos();
console.log("-------------------------------------");
agregarLibro("El alquimista");
agregarLibro("La chica del tren");
agregarLibro("Javascript para principiantes");

mostrarLibrosLeidos();