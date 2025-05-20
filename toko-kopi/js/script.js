let cartCount = 0;
let totalPrice = 0;

function addToCart(button) {
  const price = parseInt(button.getAttribute("data-price"));
  cartCount++;
  totalPrice += price;

  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("total-price").textContent = totalPrice.toLocaleString("id-ID");
}

function resetCart() {
  cartCount = 0;
  totalPrice = 0;
  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("total-price").textContent = totalPrice.toLocaleString("id-ID");
}
