function cambiarColor() {
    if (document.body.style.backgroundColor === "rgb(189, 224, 254)") {
        document.body.style.backgroundColor = "#ffc8dd";
    } else {
        document.body.style.backgroundColor = "#bde0fe";
    }
}

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const ultimaMuerte = document.getElementById("ultimaMuerte").value;
    const vivo = document.querySelector('input[name="vivo"]:checked').value;
    const gato = document.querySelector('input[name="gato"]:checked').value;
    const superpoder = document.getElementById("superpoder").value;

    // Crear el HTML para mostrar los datos
    const datosHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Última vez que te moriste:</strong> ${ultimaMuerte}</p>
        <p><strong>¿Estás vivo?</strong> ${vivo}</p>
        <p><strong>¿Eres un gato?</strong> ${gato}</p>
        <p><strong>Superpoder:</strong> ${superpoder}</p>
    `;

    // Insertar los datos en la card de resultado
    document.getElementById("datos-resultados").innerHTML = datosHTML;

    // Ocultar el formulario y mostrar la sección de resultado
    document.getElementById("formulario-seccion").classList.add("d-none");
    document.getElementById("resultado-seccion").classList.remove("d-none");
});

// Botón para volver al formulario
document.getElementById("volver-boton").addEventListener("click", function() {
    document.getElementById("formulario-seccion").classList.remove("d-none");
    document.getElementById("resultado-seccion").classList.add("d-none");
    document.getElementById("miFormulario").reset();
});

// ======================================================
// MANIPULACIÓN DEL DOM
// ======================================================

// Obtener elementos existentes del DOM

const panelDom = document.getElementById("panelDom");

const tituloDom = document.getElementById("tituloDom");

const mensajeDom = document.getElementById("mensajeDom");

const contenidoDom = document.getElementById("contenidoDom");


// Colores que utilizará la página

const coloresDom = [
    "#ffc8dd",  // Rosa
    "#c8f7c5",  // Verde
    "#bde0fe"   // Azul
];

// Variable para guardar el intervalo

let intervaloColoresDom;


// Indica qué color estamos utilizando

let colorActualDom = 0;

panelDom.addEventListener("mouseenter", function() {

    tituloDom.textContent = "🐱 ¡UIIA ACTIVADO!";

    mensajeDom.textContent = "¡El DOM ha sido modificado!";

    const video = document.createElement("video");


    video.src = "video.mp4";

    video.autoplay = true;

    video.loop = true;

    video.muted = true;


    video.setAttribute("id", "videoDom");

    video.setAttribute("controls", "true");


    contenidoDom.innerHTML = "";


    contenidoDom.appendChild(video);


    panelDom.classList.add("activo");


    colorActualDom = 0;

    document.body.style.backgroundColor =
        coloresDom[colorActualDom];


    intervaloColoresDom = setInterval(function() {

        colorActualDom++;


        // Si llegamos al último color,
        // regresamos al primero

        if (colorActualDom >= coloresDom.length) {

            colorActualDom = 0;

        }


        // Modificar el fondo del DOM

        document.body.style.backgroundColor =
            coloresDom[colorActualDom];


    }, 5000);

});


panelDom.addEventListener("mouseleave", function() {

    clearInterval(intervaloColoresDom);

    const video = document.getElementById("videoDom");


    if (video) {

        video.remove();

    }

    tituloDom.textContent = "🐱 Panel del DOM";

    mensajeDom.textContent =
        "Pasa el cursor por aquí...";

    contenidoDom.innerHTML = `
        <span class="fs-1">
            👀
        </span>
    `;

    panelDom.classList.remove("activo");

    document.body.style.backgroundColor = "#f3f3f3";

});