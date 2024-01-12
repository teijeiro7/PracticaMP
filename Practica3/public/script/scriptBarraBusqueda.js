document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        document.querySelectorAll("img.nombreBusqueda").forEach(img => {
            if (img.alt.toLowerCase().startsWith(e.target.value.toLowerCase())) {
                img.classList.remove("filtro");
            } else {
                img.classList.add("filtro");
            }
        });
    }
});


//           img.parentElement.parentElement.style.display = ''; // Muestra el contenedor de la marca
//
//           img.parentElement.parentElement.style.display = 'none'; // Oculta el contenedor de la marca

