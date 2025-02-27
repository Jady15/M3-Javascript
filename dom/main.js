function cambiarTexto() {
    let titulo = document.getElementById('titulo');
    titulo.textContent = "Hola, desde el DOM!";
}

function cambiarColorParrafos(){
    let parrafos = document.getElementsByClassName("texto");
    for (let i = 0; i < parrafos.length; i++){
        parrafos[i].style.color = "blue";
    }
}

/* Selecciona todos los elementos con la clase 'texto', y luego se utiliza un bucle para cambiar de color todos los párrafos seleccionados*/

function ocultarParrafo(){
    let segundoParrafo = document.getElementsByTagName('p')[4];
    segundoParrafo.style.display = 'none';
}

/* Selecciona todos los elementos 'p' y después se indica mediante un índice cuál de todos se recuperará */

function cambiarTextoDiv(){
    let parrafoDiv = document.querySelector('div p');
    parrafoDiv.textContent = "Texto cambiado dentro del div";
}

/* Selecciona el primer párrafo que se encuentra dentro de un div */

function marcarCositos(){
    let cositos = document.querySelectorAll('li');
    cositos.forEach(cosito => {
        cosito.style.backgroundColor = 'yellow';
    });
}

/* Selecciona todos los elementos 'li' en la página y cambia su color de fondo */

