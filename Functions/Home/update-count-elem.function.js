import liveCartData from "../../Data/live-cart.data.js";

export function updateCountElement() {
  const cart = liveCartData.getData();
  const cartItemCountElement = document.querySelector(".cart-items-count");
  if (cart.length > 0) {
    cartItemCountElement.classList.remove("hidden");
    cartItemCountElement.textContent = cart.length;
  }
  if (cart.length === 0) {
    cartItemCountElement.classList.add("hidden");
  }
}
