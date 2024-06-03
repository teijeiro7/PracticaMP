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

document.addEventListener("keydown", e => {
    if (e.target.matches("#buscador")) {
        const brandNames = Array.from(marcas.keys()).map(brand => brand.toLowerCase());
        if (e.key === "Enter") {
            if (brandNames.includes(e.target.value.toLowerCase())) {
                const location = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
                window.location.href = '/' + location;
            }
        }
    }
});