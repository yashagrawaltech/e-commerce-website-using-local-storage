import orderListData from "../../Data/order-list.data.js";
import { updateIncreaseDecreaseQuantityBtns } from "../../Utilities/update-inc-dec-quan-btn.utility.js";

export function updateAddToCartBtn(index, productId) {
  const orderList = orderListData.getData();

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
    updateIncreaseDecreaseQuantityBtns(btnIndex, productId, "p");
  } else {
    addToCartBtn.classList.remove("hidden");
    incOrDecQuantityBtns.classList.add("hidden");
  }
}
