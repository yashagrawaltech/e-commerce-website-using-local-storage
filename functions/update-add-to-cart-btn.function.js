import { updateIncreaseDecreaseProductBtns } from "./update-inc-dec-quantity-btn.function.js";

export function updateAddToCartBtn(index, productId, orderList) {
  const btnIndex = index;
  const inOrderList = orderList.find(
    (element) => element.product.product_id === productId
  );

  const productContainer = document.querySelector(".products-container");
  const addToCartBtn = productContainer.querySelector(
    `.add-to-cart-btn[data-index="${btnIndex}"]`
  );
  const incOrDecQuantityBtns = productContainer.querySelector(
    `.inc-or-dec-quantity-btns[data-index="${btnIndex}"]`
  );

  if (inOrderList) {
    addToCartBtn.classList.add("hidden");
    incOrDecQuantityBtns.classList.remove("hidden");
    updateIncreaseDecreaseProductBtns(btnIndex, productId, orderList);
  } else {
    addToCartBtn.classList.remove("hidden");
    incOrDecQuantityBtns.classList.add("hidden");
  }
}
