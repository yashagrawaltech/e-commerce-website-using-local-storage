import { updateAddToCartBtn } from "./update-add-to-cart-btn.function.js";
import { updateIncreaseDecreaseQuantityBtns } from "../../Utilities/update-inc-dec-quan-btn.utility.js";

export function loadProductBtns() {
  const incOrDecQuantityBtns = document.querySelectorAll(
    ".inc-or-dec-quantity-btns"
  );
  const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

  addToCartBtn.forEach((e) => {
    const btnIndex = e.dataset.index;
    const productId = e.dataset.productId;

    updateAddToCartBtn(btnIndex, productId);
  });

  incOrDecQuantityBtns.forEach((e) => {
    const btnIndex = e.dataset.index;
    const productId = e.dataset.productId;

    updateIncreaseDecreaseQuantityBtns(btnIndex, productId, "p");
  });
}
