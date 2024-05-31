// const btnCart = document.getElementsByClassName("cart")
// const containerCart = document.querySelector(".hiddenCartElements");

// btnCart.addEventListener("click", () => {
//     containerCart.classList.toggle("hideElements");
// });

const buttonSearch = document.querySelector("#button_search");

buttonSearch.addEventListener("click", () => {
    const searchInput = document.querySelector(".search_input");
    searchInput.classList.toggle("search_input_show");
});

const buttonList = document.querySelector("#button_list");


buttonList.addEventListener("click", () => {
    const brandList = document.querySelector(".brands_list");
    brandList.classList.toggle("brands_list_show");
});