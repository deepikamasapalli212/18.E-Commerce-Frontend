let products = [
    {
        id: 1,
        name: "Nike Running Shoes",
        price: 3999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Leather Bag",
        price: 2499,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "RayBan Sunglasses",
        price: 2999,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Men Cotton T-Shirt",
        price: 799,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        name: "Men Blue Jeans",
        price: 1499,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80"
    },
];

let cart = [];

let productList = document.getElementById("product-list");

products.forEach(product => {
    let div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: Rs. ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(div);
});

function addToCart(id) {
    let product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;

    let cartSection = document.getElementById("cart-section");
    cartSection.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartSection.innerHTML += `
            <div>
                ${item.name} - Rs. ${item.price}
            </div>
        `;
    });

    document.getElementById("total").innerText =
        "Total: Rs. " + total;
}
