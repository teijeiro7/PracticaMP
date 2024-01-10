/* const btnCart = document.querySelector('.containerIconCart');
const containerCartProducts = document.querySelector(
    'hiddenCartElements'
);

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hideElements');
}); */

const cartInfo = document.querySelector('.cartProducts');
const rowProduct = document.querySelector('.rowProducts');

const productsList = document.querySelectorAll('.carritoCompra');

let allProducts = [];

const valorTotal = document.querySelector('.totalPayment');
console.log(valorTotal);

const countProducts = document.querySelector('.productsCounter');

const cartEmpty = document.querySelector('.emptyCart');
const cartTotal = document.querySelector('.cartTotal');

[...productsList].map(carritoBoton => {
    carritoBoton.addEventListener('click', e => {

        const product = e.target.parentElement.parentElement.parentElement;
        console.log(product);

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('.parrafoPala').innerText,
            price: product.querySelector('.precioPala').innerText,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    });
})

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('iconClose')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();

    }
});

const showHTML = () => {
    if (!allProducts.length) {
        cartTotal.classList.add('hidden');

        console.log(rowProduct);
        console.log("Estoy vacio");
        cartInfo.innerHTML = `
            <div class="cartEmpty">
                <p class="emptyCart">El carrito está vacio</p>
            </div>
        `;
        console.log(rowProduct);

        let total = 0;
        let totalOfProducts = 0;
        valorTotal = 0;

        valorTotal.innerText = `${total}`;
        countProducts.innerText = `${totalOfProducts}`;

    } else {

        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');

        let total = 0;
        let totalOfProducts = 0;

        allProducts.forEach(product => {

            const productDiv = `
            <div class="infoCartProduct">
                <span class="productCartCount">${product.quantity}</span>
                <p class="productTitleCart">${product.title}</p>
                <span class="productPriceCart">${product.price}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="iconClose" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            
        `;

            cartInfo.insertAdjacentHTML('beforeend', productDiv);


            console.log(product.quantity);
            console.log(parseFloat(product.price));
            total =
                total + (product.quantity * parseFloat(product.price));
            totalOfProducts = totalOfProducts + product.quantity;

        });
        valorTotal.innerText = `${total}`;
        countProducts.innerText = `${totalOfProducts}`;
        console.log(valorTotal);

    }


};