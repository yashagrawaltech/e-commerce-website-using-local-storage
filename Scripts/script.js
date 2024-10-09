import { displayProducts } from "../Functions/Home/display-products.function.js";
import { loadProductBtns } from "../Functions/Home/load-product-btns.function.js";
import { triggerAddToCartBtn } from "../Functions/Home/trigger-add-to-cart.function.js";
import { triggerIncreaseDecreaseProductBtnInHome } from "../Functions/Home/trigger-inc-dec-quan-btns-in-home.function.js";
import { triggerSearch } from "../Functions/Home/trigger-search.function.js";
import { updateCountElement } from "../Functions/Home/update-count-elem.function.js";

console.log("Hello From Home!");

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  loadProductBtns();
  triggerSearch();
  triggerAddToCartBtn();
  triggerIncreaseDecreaseProductBtnInHome();
  updateCountElement();
});
