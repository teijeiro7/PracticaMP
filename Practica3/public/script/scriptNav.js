const btnCart = document.querySelector(".containerIconCart");
const containerCart = document.querySelector(".hiddenCartElements");

btnCart.addEventListener("click", () => {
    containerCart.classList.toggle("hideElements");
});