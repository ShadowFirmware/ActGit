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