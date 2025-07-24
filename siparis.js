
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.querySelector(".cart-items-container");
  cartContainer.innerHTML = ""; // öncekileri temizle

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <div class="content">
        <h3>${item.name}</h3>
        <div class="price">${item.price}₺</div>
        <span onclick="removeFromCart(${index})" style="cursor:pointer;color:red;">Sil</span>
      </div>
    `;
    cartContainer.appendChild(div);
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

function checkout() {
  alert("Siparişiniz alındı! Teşekkür ederiz.");
  cart = [];
  localStorage.removeItem("cart");
  updateCartDisplay();
}

// Sayfa ilk açıldığında sepeti yükle
updateCartDisplay();

