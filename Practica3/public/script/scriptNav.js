const btnCart = document.querySelector(".containerIconCart");
const containerCart = document.querySelector(".hiddenCartElements");

btnCart.addEventListener("click", () => {
    containerCart.classList.toggle("hideElements");
    console.log("Hola");
});

const buttonSearch = document.querySelector(".buttonSearch");



buttonSearch.addEventListener("click", () => {
    const searchInput = document.querySelector(".searchInput");
    searchInput.classList.toggle("show");
});


