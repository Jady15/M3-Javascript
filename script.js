document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp(){
    // Recuperando elementos del HTML
    const productoInput = document.getElementById('producto');
    const agregarBtn = document.getElementById('agregar');
    const listaCompras = document.getElementById('lista-compras');

    // Arreglo de productos
    let productos = [];

    agregarBtn.addEventListener('click', function(){
        // Al hacer click en el botón, se agregará el producto escrito en el input
        agregarProducto(productos, productoInput, listaCompras);
    }); 
}

function agregarProducto(productos, productoInput, listaCompras){
    // Recuperando el valor ingresado en el input
    const nombreProducto = productoInput.value.trim();
    if(nombreProducto){ // Verifica que el input tenga contenido
        const nuevoProducto = { // Objeto para declarar las características del nuevo producto
            nombre: nombreProducto,
            comprado: false
        };
        productos.push(nuevoProducto);  // Añadir el nuevo producto al arreglo
        mostrarProductos(nuevoProducto, listaCompras);  // Llamada al método para mostrar el producto creado en el HTML
        productoInput.value = '';   // Restablece el valor del input
    }
}

function mostrarProductos(producto, listaCompras){
    const nuevoItem = document.createElement('li'); // Crea un nuevo ListItem <li></li>
    nuevoItem.textContent = producto.nombre;    // Escribe el nombre del producto dentro del ListItem como texto
    listaCompras.appendChild(nuevoItem);        // Inserta el elemento <li> como último elemento de la lista <ul>
}