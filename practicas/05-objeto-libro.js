let libro1 = {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    anio: 1943,
    estado: 'Disponible',
    capitulos: ['El dibujo del elefante dentro de la serpiente', 'Encuentro con el Principito', 'El asteroide B 612', 'Los baobabs y su amenaza', 'La flor orgullosa'],
      /* La función 'agregarCapitulo' verificará si el nombre ya se encuentra registrado en la lista de capítulos y lo insertará al final de la lista en caso de que no exista.*/ 
    agregarCapitulo: function(nombreCapitulo){
        let indice = this.capitulos.indexOf(nombreCapitulo);
        if (indice !== -1) {    // El capítulo existe
            console.log(`¡El capítulo '${nombreCapitulo}' ya existe!`);
        } else {    // El capítulo no existe
            this.capitulos.push(nombreCapitulo);
        }
    },
        /* La función 'eliminarCapitulo' verificará si el capítulo a eliminar existe y lo eliminará de la lista con el método splice*/ 
    eliminarCapitulo: function(nombreCapitulo){
        let indice = this.capitulos.indexOf(nombreCapitulo);
        if (indice !== -1) {    // El capítulo existe
            this.capitulos.splice(indice, 1);
        } else {    // El capítulo no existe
            console.log(`¡El capítulo '${nombreCapitulo}' no existe!`)
        }
    }
};

// Función para mostrar en consola la descripción de un libro
function describirLibro(libro) {
    console.log(`Libro titulado ${libro.titulo}, escrito por ${libro.autor} en el año ${libro.anio}. El estado del libro es: ${libro.estado}`); 
}

// Función para mostrar en consola el nombre de cada capítulo
function mostrarCapitulos(libro) {
    let capitulos = libro.capitulos;
    for (let i = 0; i < capitulos.length; i++){
        console.log(`${i + 1}. ${capitulos[i]}`);
    }
}


describirLibro(libro1);

console.log("INSERTANDO CAPÍTULO");
libro1.agregarCapitulo('Los atardeceres en el asteroide');
mostrarCapitulos(libro1);

console.log("ELIMINANDO CAPÍTULO");
libro1.eliminarCapitulo('La flor orgullosa');
mostrarCapitulos(libro1);

