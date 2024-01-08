const brandName = document.getElementById("marca");
const nameError = document.getElementById('errorNombre');
const checkBrandName = () => {
    if (brandName.value.trim() == '') {
        nameError.textContent = "El nombre de la marca no puede estar vacía";
    }
    if (brandName.value.charAt(0) !== brandName.value.charAt(0).toUpperCase()) {
        nameError.textContent = 'La primera letra del nombre de la marca tiene que ser mayúscula.';
    } else {
        nameError.textContent = "";
    }
}

const brandYear = document.getElementById("año");
const yearError = document.getElementById('errorAno');
const checkBrandYear = () => {
    if (brandYear.value == "") {
        nameError.textContent = "El año de creación no puede ser vacío";
        return;
    } else if (brandYear.value < 1800 || brandYear.value > 2024) {
        yearError.textContent = "El año de creación de la marca tiene que estar comprendido entre 1800 y 2024";
    }
    else {
        nameError.textContent = "";
    }
}

const brandFounder = document.getElementById("nombre");
const founderError = document.getElementById("errorFundador");
const checkBrandFounder = () => {

    if (brandFounder.value.trim() == '') {
        founderError.textContent = "El nombre del fundador no puede ser vacío";
        return;
    }
    if (brandFounder.value.charAt(0) !== brandFounder.value.charAt(0).toUpperCase()) {
        founderError.textContent = 'La primera letra del nombre del fundador tiene que ser mayúscula.';
        return;
    } else {
        founderError.textContent = "";
    }
}

const brandWeb = document.getElementById("web");
const webError = document.getElementById("errorWeb");
const checkBrandWeb = () => {
    if (brandWeb.value.trim() == '') {
        urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

        if (!urlRegex.test(brandWeb.value.trim())) {
            webError.textContent = 'Por favor, ingresa una URL válida.';
            return;
        }
    } else {
        nameError.textContent = "";
    }
}

const brandPlayers = document.getElementById("colaborators");
const errorPlayers = document.getElementById("errorPlayers");
const checkBrandPlayers = () => {

    if (brandPlayers.value.trim() == '') {
        errorPlayers.textContent = "El nombre no puede ser vacío";
        return;
    } else if (brandPlayers.value.charAt(0) !== brandPlayers.value.charAt(0).toUpperCase()) {
        errorPlayers.textContent = 'La primera letra del nombre tiene que ser mayúscula.';
        return;
    } else {
        errorPlayers.textContent = "";
    }
}

brandName.addEventListener('input', checkBrandName);
/* brandYear.addEventListener('input', checkBrandYear); */
brandFounder.addEventListener('input', checkBrandFounder);
brandWeb.addEventListener('input', checkBrandWeb);
brandPlayers.addEventListener('input', checkBrandPlayers);


document.addEventListener("submit", async function (event) {
    event.preventDefault();
    checkBrandName();
    checkBrandYear();
    checkBrandFounder();
    checkBrandWeb();
    checkBrandPlayers();

    const brandImage = document.getElementById("imagen");
    const imageError = document.getElementById("errorImagen");
});
