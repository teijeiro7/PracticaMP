const btnCart = document.querySelector("#buttonCart");
const containerCart = document.querySelector(".hiddenCartElements");

btnCart.addEventListener("click", () => {
    containerCart.classList.toggle("hideElements");
    console.log("click");
});
