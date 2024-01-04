const btnCart = document.querySelector(".containerIconCart");
const containerCart = document.querySelector(".hiddenCartElements");

btnCart.addEventListener("click", () => {
    containerCart.classList.toggle("hideElements");
    console.log("click");
});

const cartInfo = document.querySelector(".cartProducts");
async function loadBrands() {
    let init = 4;
    const res = await fetch("/cargarJson");
    if (!res.ok) {
        console.log("Could not load brands")
    }
    const html = await res.text(); // obtener HTML

    const container = document.getElementById('marcasContainer');
    container.innerHTML = html; // insertar HTML en la página

    init = init + 3;
}

loadBrands()