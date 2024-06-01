import marcas from "./brandsService.js";

document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        document.querySelectorAll("img.nombreBusqueda").forEach(img => {
            const container = img.parentElement.parentElement; // Contenedor de la imagen
            if (img.alt.toLowerCase().includes(e.target.value.toLowerCase())) {
                container.style.display = ''; // Muestra el contenedor de la marca
            } else {
                container.style.display = 'none'; // Oculta el contenedor de la marca
            }
        });
    }
});

document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        document.querySelectorAll('.pala').forEach(div => {

            let nombrePala = div.querySelector('.parrafoPala').textContent.toLowerCase().trim();
            if (nombrePala.toLowerCase().startsWith(e.target.value.toLowerCase())) {
                div.style.display = '';
            } else {
                div.style.display = 'none';
            }
        })
    }
})

// en caso de que el texto que se coloque en el input = nombreMarca te redirige a la pagina de la marca
document.addEventListener("keydown", e => {
    if (e.target.matches("#buscador")) {
        const brandNames = marcas.map(brand => brand.name.toLowerCase());
        if (brandNames.includes(e.target.value.toLowerCase())) {
            window.location.href = '/' + e.target.value.toLowerCase();
        }
        e.preventDefault();
    }
});
