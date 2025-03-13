document.addEventListener("DOMContentLoaded", () => {

    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentContainer = document.getElementById("comment-container");

    let commentList = [];  // Lista de comentarios
    let commentId; // ID inicial
    initializeCommentId();  // Inicializa el ID del próximo comentario 
    showComments(); // Muestra los comentarios actuales en pantalla

    // Inicializar el ID de comentario basado en localStorage
    function initializeCommentId() {
        commentList = JSON.parse(localStorage.getItem("commentList")) || [];
        if (commentList.length === 0) {
            commentId = 1; // Si no hay comentarios, empieza en 1
        } else {
            // Encuentra el ID más alto y suma 1
            commentId = Math.max(...commentList.map(comment => comment.id)) + 1;
        }
    }

    // Mostrar comentarios en pantalla
    function showComments() {
        commentContainer.innerHTML = "";    // Se limpia toda la sintaxis del contenedor de comentarios

        commentList = JSON.parse(localStorage.getItem("commentList")) || [] ;

        if (commentList.length === 0){
            const noCommentsDiv = document.createElement("div");
            noCommentsDiv.classList.add('no-comments');
            noCommentsDiv.textContent = "Aún no hay comentarios. ¡Escribe lo que quieras!";
            commentContainer.appendChild(noCommentsDiv);
            return;
            /*----------------------------------------------
            <div class="no-comments">
            Aún no hay comentarios. ¡Escribe lo que quieras!
            </div>
            -----------------------------------------------*/ 
        }
        commentList.forEach(comment => {
            const commentWrapper = document.createElement("div");
            commentWrapper.classList.add("comment-wrapper");
            /*----------------------------------------------
            <div class="comment-wrapper">
            </div>
            -----------------------------------------------*/

            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");

            /*----------------------------------------------
            <div class="comment">
            </div>
            -----------------------------------------------*/

            const commentBody = document.createElement("p");
            commentBody.classList.add("comment-body");
            commentBody.textContent = comment.contenido;
            /*----------------------------------------------
            <p class="comment-body">
            ${comment.contenido}
            </p>
            -----------------------------------------------*/

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-btn");
            deleteButton.textContent = "X";
            deleteButton.addEventListener("click", function() {
                deleteComment(comment.id);
            });

            /*----------------------------------------------
            <button class="delete-btn">X</button>
            -----------------------------------------------*/

            
            const commentDate = document.createElement("p");
            commentDate.classList.add("comment-date");
            commentDate.textContent = comment.fecha;
            /*----------------------------------------------
            <p class="comment-date">
            ${comment-date}
            </p>
            -----------------------------------------------*/

            commentDiv.appendChild(commentBody);        // Añade el contenido al contenedor del comentario
            commentDiv.appendChild(deleteButton);       // Añade el botón de eliminar al contenedor del comentario

            commentWrapper.appendChild(commentDiv);     // Añade el contenedor del comentario a su "envoltorio"
            commentWrapper.appendChild(commentDate);    // Añade la fecha del comentario debajo del contenedor del comentario, dentro del "envoltorio"

            commentContainer.prepend(commentWrapper);   // Añade la estructura del comentario a la caja de comentarios.
        });
    }

    // Función para agregar nuevo comentario
    function addComment(content) {
        // Crear objeto con propiedades del nuevo comentario
        const newComment = {
            id: commentId,
            contenido: content,
            fecha: new Date().toLocaleString()  // Convierte la fecha y hora actuales en formato de texto
        };

        commentId++;
        commentList.push(newComment);   // Inserta el nuevo comentario al arreglo

        localStorage.setItem("commentList", JSON.stringify(commentList));

        showComments(); // Cargar la lista de comentarios
    }

    // Función para eliminar un comentario en base a su id
    function deleteComment(id) {
        const opc = confirm('¿Estás seguro que deseas eliminar el comentario?');
        if (!opc) return; // Si se da en 'Cancelar', no hace nada
        for (let i = 0; i < commentList.length; i++) {
            if (commentList[i].id === id) { // Si encuentra el comentario con el ID solicitado, lo eliminará de la lista
                commentList.splice(i, 1);
                break;  // Salir del ciclo for cuando ya se haya eliminado el elemento de la lista
            }
        }
        localStorage.setItem("commentList", JSON.stringify(commentList));

        showComments(); // Cargar la lista de comentarios
    }

    // Al enviar el formulario, se recuperará el contenido del input y se añadirá un nuevo comentario a la lista
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario

        const commentText = commentInput.value.trim();
        if (commentText === "") return; // Si el contenido del input está vacío, no hace nada

        addComment(commentText);
        commentInput.value = "";
    });
});