const btnCart = document.querySelector(".containerIconCart");
const containerCart = document.querySelector(".hiddenCartElements");

btnCart.addEventListener("click", () => {
    containerCart.classList.toggle("hideElements");
    console.log("click");
});

const cartInfo = document.querySelector(".cartProducts");
