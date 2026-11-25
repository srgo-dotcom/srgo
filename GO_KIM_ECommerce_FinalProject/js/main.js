let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showCartCount() {
  const badge = document.getElementById("cartCount");
  badge.textContent = cart.length;
}

const addButtons = document.querySelectorAll(".add-to-cart");

addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    cart.push(button.dataset.name);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCartCount();
    button.textContent = "Added ♥";
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const category = button.dataset.filter;

    products.forEach(function (product) {
      const match = category === "all" || product.dataset.category === category;
      product.hidden = !match;
    });
  });
});

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    if (form.checkValidity()) {
      document.getElementById("formSuccess").classList.remove("d-none");
      form.reset();
    } else {
      form.classList.add("was-validated"); 
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

showCartCount();
