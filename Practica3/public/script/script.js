const btnCart = document.querySelector(".containerIconCart");
const containerCart = document.querySelector(".hiddenCartElements");

btnCart.addEventListener("click", () => {
    containerCart.classList.toggle("hideElements");
    console.log("click");
});

const cartInfo = document.querySelector(".cartProducts");
let init = 0;
let final = 3; //para que llegue hasta el 3
async function loadBrands() {
    const res = await fetch(`/cargarJson?init=${init}&final=${final}`);
    if (!res.ok) {
        console.log("Could not load brands")
    }
    const html = await res.text(); // obtener HTML


    const container = document.getElementById('container_body');

    container.innerHTML = html + container.innerHTML;  //meter delante
    init+=3 //este no es porque estarias repitiendo el 3
    final+=3
    
}

loadBrands()