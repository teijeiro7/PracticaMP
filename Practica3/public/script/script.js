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
    init += 3 //este no es porque estarias repitiendo el 3
    final += 3

}

loadBrands();

document.getElementById("formularioMarca").addEventListener("submit", async function (event) {
    event.preventDefault();

    const brandName = document.getElementById("marca");
    const nameError = document.getElementById('errorNombre');

    if (brandName.value.trim() == '') {
        nameError.textContent = "El nombre no puede ser vacío";
        return;
    } else if (brandName.charAt(0) !== brandName.charAt(0).toUpperCase()) {
        nameError.textContent = 'La primera letra del nombre tiene que ser mayúscula.';
        return;
    } else {
        nameError.textContent = "";
    }

    const brandYear = document.getElementById("año");
    const yearError = document.getElementById('errorAno');

    if (brandYear.value = "") {
        nameError.textContent = "El año no puede ser vacío";
        return;
    } else if (brandYear.value < 1800 || brandYear.value > 2024) {
        yearError.textContent = "El año tiene que estar comprendido entre 1800 y 2024";
    }
    else {
        nameError.textContent = "";
    }

    const brandFounder = document.getElementById("nombre");
    const founderError = document.getElementById("errorFundador");

    if (brandFounder.value.trim() == '') {
        founderError.textContent = "El nombre no puede ser vacío";
        return;
    } else if (brandFounder.charAt(0) !== brandFounder.charAt(0).toUpperCase()) {
        founderError.textContent = 'La primera letra del nombre tiene que ser mayúscula.';
        return;
    } else {
        founderError.textContent = "";
    }

    const brandImage = document.getElementById("imagen");
    const imageError = document.getElementById("errorImagen");


    const brandWeb = document.getElementById("web");
    const webError = document.getElementById("errorWeb");

    if (brandWeb.value.trim() == '') {
        urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

        if (!urlRegex.test(brandWeb.value.trim())) {
            webError.textContent = 'Por favor, ingresa una URL válida.';
            return;
        }
    } else {
        nameError.textContent = "";
    }

    const brandPlayers = document.getElementById("colaborators");
    const errorPlayers = document.getElementById("errorPlayers");

    if (brandPlayers.value.trim() == '') {
        errorPlayers.textContent = "El nombre no puede ser vacío";
        return;
    } else if (brandPlayers.charAt(0) !== brandPlayers.charAt(0).toUpperCase()) {
        errorPlayers.textContent = 'La primera letra del nombre tiene que ser mayúscula.';
        return;
    } else {
        errorPlayers.textContent = "";
    }
})