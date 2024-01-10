/* const btnCart = document.querySelector('.containerIconCart');
const containerCartProducts = document.querySelector(
    'hiddenCartElements'
);

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hideElements');
}); */

const cartInfo = document.querySelector('.cartProducts');
const rowProduct = document.querySelector('.rowProducts');

const productsList = document.querySelector('.divNox');

let allProducts = [];

const valorTotal = document.getElementsByClassName('.totalPayment');

const countProducts = document.querySelector('.productsCounter');

const cartEmpty = document.querySelector('.emptyCart');
const cartTotal = document.querySelector('.cartTotal');

productsList.addEventListener('click', e => {


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
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cartProducts');

        containerProduct.innerHTML = `
            <div class="infoCartProduct">
                <span class="productCartCount">${product.quantity}</span>
                <p class="productTitleCart">${product.title}</p>
                <span class="productPriceCart">${product.price}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="iconClose" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        `;

        rowProduct.append(containerProduct);

        console.log(product.quantity);
        console.log(parseFloat(product.price));
        total =
            total + (product.quantity * parseFloat(product.price));
        totalOfProducts = totalOfProducts + product.quantity;

        /* const summary = document.createElement('div');
        summary.classList.add('cartTotal hidden');

        summary.innerHTML = `
            <h3>Total: ${total}</h3>
            <span class="totalPayment">${totalOfProducts}</span>
        `; */

    });
    valorTotal.innerText = `${total}`;
    countProducts.innerText = `${totalOfProducts}`;

};