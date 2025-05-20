const products = [
  {id: 1, name: "Kopi Arabika", category: "kopi", price: 30000, image: "img/kopi-arabika.jpg"},
  {id: 2, name: "Teh Hijau", category: "teh", price: 20000, image: "img/teh-hijau.jpg"},
  {id: 3, name: "Snack Kacang", category: "snack", price: 15000, image: "img/snack-kacang.jpg"},
  {id: 4, name: "Kopi Robusta", category: "kopi", price: 25000, image: "img/kopi-robusta.jpg"},
];

function displayProducts(filter) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>Rp ${p.price.toLocaleString("id-ID")}</p>
      <a href="product.html?id=${p.id}">Lihat Detail</a>
    `;

    productList.appendChild(card);
  });
}

function filterCategory(category) {
  displayProducts(category);
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produk ditambahkan ke keranjang!");
}


// Load semua produk pas pertama kali
displayProducts("all");
