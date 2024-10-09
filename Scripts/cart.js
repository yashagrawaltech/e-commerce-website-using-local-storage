import { displayCartItems } from "../Functions/Cart/display-cart-items.function.js";
import { triggerIncreaseDecreaseProductBtnInCart } from "../Functions/Cart/trigger-inc-dec-quan-in-cart.function.js";
import { updateBill } from "../Functions/Cart/update-bill.function.js";

console.log("Hello From Cart!");

document.addEventListener("DOMContentLoaded", () => {
  displayCartItems();
  updateBill();
  triggerIncreaseDecreaseProductBtnInCart();
});
