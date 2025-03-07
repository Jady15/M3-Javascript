document.addEventListener("DOMContentLoaded", () => {
    // Obtención de elementos del DOM por su ID de las secciones
    const inicio = document.getElementById('inicio');
    const productos = document.getElementById('productos');
    const contacto = document.getElementById('contacto');

    // Obtención del elementos del DOM por su ID del menú de navegación
    const menuInicio = document.getElementById('menu-inicio');
    const menuProductos = document.getElementById('menu-productos');
    const menuContacto = document.getElementById('menu-contacto');

    // Obtención de elementos del DOM para el carrito de compras
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0;  // Variable para almacenar el total del carrito

    // Obtención de elementos del DOM para el formulario de contacto
    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    // Evento para mostrar la sección de Inicio y ocultar las demás
    menuInicio.addEventListener('click', (event) => {
        event.preventDefault();
        inicio.style.display = 'block';     // Mostrar
        productos.style.display = 'none';   // Ocultar
        contacto.style.display = 'none';    // Ocultar
    });
    // Evento para mostrar la sección de Productos y ocultar las demás
    menuProductos.addEventListener('click', (event) => {
        event.preventDefault();
        inicio.style.display = 'none';
        productos.style.display = 'block';
        contacto.style.display = 'none';
    });
    // Evento para mostrar la sección de Contacto y ocultar las demás
    menuContacto.addEventListener('click', (event) => {
        event.preventDefault();
        inicio.style.display = 'none';
        productos.style.display = 'none';
        contacto.style.display = 'block';
    });

    // Evento para agregar productos al carrito
    productos.addEventListener('click', (event) => {
        if (event.target.classList.contains('agregar-carrito')){    // Verifica si el clic fue en el botón 'agregar-carrito'
            const nombre = event.target.dataset.nombre; // Obtiene el nombre del producto
            const precio = parseInt(event.target.dataset.precio);   // Obtiene el precio del producto

            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = `${nombre} - ${precio}`;
            listaCarrito.appendChild(nuevoItem);

            total += precio;    // Suma el precio del producto al total del carrito
            console.log(total);
            actualizarTotalCarrito();
        }
    });

    // Ejemplo de querySelector para manipular el total del carrito
    const totalElemento = document.querySelector('#total-carrito');

    function actualizarTotalCarrito() {
        totalElemento.textContent = total;
    }

    // Título del carrito con querySelector
    const tituloCarrito = document.querySelector('#carrito h2');
    tituloCarrito.textContent = 'Sus pasteles:';

    // Simular el envío del formulario
    formularioContacto.addEventListener('submit', (event) => {
        event.preventDefault();
        formularioContacto.style.display = 'none';
        mensajeEnviado.style.display = 'block';
    });

    // Ejemplo con querySelector para mostrar el precio del producto
    productos.addEventListener('mouseover', (event) =>{
        if (event.target.classList.contains('producto')){
            const precio = event.target.querySelector('.agregar-carrito').dataset.precio;
            event.target.setAttribute('title', `Precio: ${precio}`);    // Lo muestra como tooltip
        }
    });
});