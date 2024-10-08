import { updateAddToCartBtn } from "./update-add-to-cart-btn.function.js";
import { updateIncreaseDecreaseProductBtns } from "./update-inc-dec-quantity-btn.function.js";

export function loadProductBtns(orderList) {
  const incOrDecQuantityBtns = document.querySelectorAll(
    ".inc-or-dec-quantity-btns"
  );
  const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

  addToCartBtn.forEach((e) => {
    const btnIndex = e.dataset.index;
    const productId = e.dataset.productId;

    updateAddToCartBtn(btnIndex, productId, orderList);
  });

  incOrDecQuantityBtns.forEach((e) => {
    const btnIndex = e.dataset.index;
    const productId = e.dataset.productId;

    updateIncreaseDecreaseProductBtns(btnIndex, productId, orderList);
  });
}
