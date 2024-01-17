const brandName = document.getElementById("marca");
const nameError = document.getElementById('errorNombre');
const checkBrandName = () => {
    nameError.textContent = "";
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
    yearError.textContent = "";
    if (brandYear.value == "") {
        yearError.textContent = "El año de creación no puede ser vacío";
        return;
    }
    if (brandYear.value < 1800 || brandYear.value > 2024) {
        yearError.textContent = "El año de creación de la marca tiene que estar comprendido entre 1800 y 2024";
    }
    else {
        yearError.textContent = "";
    }
}

const brandFounder = document.getElementById("founder");
const founderError = document.getElementById("errorFundador");
const checkBrandFounder = () => {
    founderError.textContent = "";

    if (brandFounder.value.trim() == '') {
        founderError.textContent = "El nombre del fundador no puede ser vacío";
    }
    if (brandFounder.value.charAt(0) !== brandFounder.value.charAt(0).toUpperCase()) {
        founderError.textContent = 'La primera letra del nombre del fundador tiene que ser mayúscula.';
    } else {
        founderError.textContent = "";
    }
}

const brandWeb = document.getElementById("web");
const webError = document.getElementById("errorWeb");

const checkBrandWeb = () => {
    let urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    if (!urlRegex.test(brandWeb.value.trim())) {
        webError.textContent = 'Por favor, ingresa una URL válida.';
    } else {
        webError.textContent = "";
    }
}

/* const brandImage = document.getElementById("imagen");
const imageWebError = document.getElementById("errorImageWeb");

const checkBrandImage = () => {
    let urlImageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i;

    if (!urlImageRegex.test(brandImage.value.trim())) {
        imageWebError.textContent = 'Por favor, ingresa una URL de imagen válida.';
    } else {
        imageWebError.textContent = "";
    }
} */

const brandPlayers = document.getElementById("colaborators");
const errorPlayers = document.getElementById("errorPlayers");
const checkBrandPlayers = () => {
    errorPlayers.textContent = "";

    if (brandPlayers.value.trim() == '') {
        errorPlayers.textContent = "El nombre no puede ser vacío";

    }
    if (brandPlayers.value.length < 50 || brandPlayers.value.length > 500) {
        errorPlayers.textContent = errorPlayers.textContent + 'El texto debe tener entre 50 y 500 caracteres.';
    }
    if (brandPlayers.value.charAt(0) !== brandPlayers.value.charAt(0).toUpperCase()) {
        errorPlayers.textContent = errorPlayers.textContent + 'La primera letra del nombre tiene que ser mayúscula.';

    } else {
        errorPlayers.textContent = "";
    }
}

brandName.addEventListener('input', checkBrandName);
brandYear.addEventListener('input', checkBrandYear);
/* brandImage.addEventListener('input', checkBrandImage) */
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
    /* checkBrandImage(); */

    console.log(brandName);

    fetch('/newBrand', {
        method: 'POST',
        body: { brandName, brandYear, brandFounder, brandImage, brandWeb, brandPlayers }
    }).then(response => {
        // Maneja la respuesta aquí
    }).catch(error => {
        // Maneja el error aquí
    });


});
