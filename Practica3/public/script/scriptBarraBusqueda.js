/* Busca las marcas que sigan el patron de letras del input*/
document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        document.querySelectorAll("img.nombreBusqueda").forEach(img => {
            const container = img.parentElement.parentElement; // Contenedor de la imagen
            if (img.alt.toLowerCase().startsWith(e.target.value.toLowerCase())) {
                container.style.display = ''; // Muestra el contenedor de la marca
            } else {
                container.style.display = 'none'; // Oculta el contenedor de la marca
            }
        });
    }
});

// en caso de que el texto que se coloque en el input = nombreMarca te redirige a la pagina de la marca
document.addEventListener("keydown", e => {
    if (e.target.matches("#buscador") && e.keyCode === 13) {
        document.querySelectorAll("img.nombreBusqueda").forEach(img => {
            if (img.alt.toLowerCase() === e.target.value.toLowerCase()) {
                window.location.href = '/' + img.alt; // Redirige a /:brandName
            }
        });
        e.preventDefault(); // Evita la acción por defecto del evento Enter
    }
});