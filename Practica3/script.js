let cart = [];
let totalAmount = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalAmount += price;
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');

    // Limpiar el carrito antes de actualizar
    cartItemsElement.innerHTML = '';

    // Actualizar la lista de productos en el carrito
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product}: $${item.price}`;
        cartItemsElement.appendChild(listItem);
    });

    // Actualizar el total
    totalAmountElement.textContent = totalAmount;
}
