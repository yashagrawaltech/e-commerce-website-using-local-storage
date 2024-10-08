export function updateCountElement(cart) {
  const cartItemCountElement = document.querySelector(".cart-items-count");
  if (cart.length > 0) {
    cartItemCountElement.classList.remove("hidden");
    cartItemCountElement.textContent = cart.length;
  }
  if (cart.length === 0) {
    cartItemCountElement.classList.add("hidden");
  }
}
