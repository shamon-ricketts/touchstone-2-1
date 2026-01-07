// Subscribe button alert
const subscribeBtn = document.getElementById("subscribeBtn");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", function () {
    alert("Thank you, please come again.");
  });
}

// Add to Cart buttons alert
const addToCartButtons = document.querySelectorAll(".addToCart");
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("Item added to the cart.");
  });
});

// Clear Cart alert
const clearCartBtn = document.getElementById("clearCartBtn");
if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    alert("The cart has been cleared.");
  });
}

// Process Order alert
const processOrderBtn = document.getElementById("processOrderBtn");
if (processOrderBtn) {
  processOrderBtn.addEventListener("click", function () {
    alert("Thank you for your order.");
  });
}

// Contact form submission alert
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message.");
  });
}
