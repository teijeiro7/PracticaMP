const btnCart = document.querySelector(".containerIconCart");
const containerCart = document.querySelector(".hiddenCartElements");

btnCart.addEventListener("click", () => {
    containerCart.classList.toggle("hideElements");
    console.log("click");
});

const cartInfo = document.querySelector(".cartProducts");
async function loadBrands() {

        const res = await fetch("/cargarJson");
        if (!res.ok) {
            console.log("Could not load brands")
        }
        const data = await res.text(); //texto
            console.log(data);
        
        // Ahora puedes usar 'data' para actualizar el DOM.
        // Por ejemplo, podrías crear un nuevo elemento para cada marca y añadirlo a un contenedor en tu página:
        const container = document.getElementById('marcasContainer');
        data.infoMarcas.forEach(marcas => {
            const div = document.createElement('div');
            div.textContent = marcas.brandImage;
            container.appendChild(div);
        });

    
}

loadBrands()