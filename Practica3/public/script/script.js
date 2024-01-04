const btnCart = document.querySelector(".containerIconCart");
const containerCart = document.querySelector(".hiddenCartElements");

btnCart.addEventListener("click", () => {
    containerCart.classList.toggle("hideElements");
    console.log("click");
});

const cartInfo = document.querySelector(".cartProducts");
async function loadBrands() {
    try {
        const res = fetch("/");
        if (!res.ok) {
            throw new Error("Could not load brands")
        }
        const data = await res.json();
    } catch (error) {
        console.log(error.message);
    }
}

loadBrands()