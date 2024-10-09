import liveCartData from "../../Data/live-cart.data.js";
import orderListData from "../../Data/order-list.data.js";
import { products } from "../../Data/products.data.js";
import { addToCart } from "../../Utilities/add-to-cart.utility.js";
import { removeFromCart } from "../../Utilities/remove-from-cart.utility.js";
import { updateCountElement } from "./update-count-elem.function.js";
import { updateIncreaseDecreaseQuantityBtns } from "../../Utilities/update-inc-dec-quan-btn.utility.js";

export function triggerIncreaseDecreaseProductBtnInHome() {
  const liveCart = liveCartData.getData();
  const orderList = orderListData.getData();

  const productContainer = document.querySelector(".products-container");
  productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
      const productId = e.target.dataset.productId;
      const btnIndex = e.target.dataset.index;
      const productIndex = products.findIndex(
        (element) => element.product_id === productId
      );

      const product = products[productIndex];

      addToCart(product);
      updateCountElement();
      updateIncreaseDecreaseQuantityBtns(btnIndex, productId, "p");
    }

    if (e.target.classList.contains("less")) {
      const productId = e.target.dataset.productId;
      const btnIndex = e.target.dataset.index;

      let indexAtOrderList = orderList.findIndex(
        (element) => element.product.product_id === productId
      );

      if (indexAtOrderList) {
        const productIndexInLiveCart = liveCart.findIndex(
          (element) => element.product_id === productId
        );

        removeFromCart(productIndexInLiveCart);
        updateCountElement();
        updateIncreaseDecreaseQuantityBtns(btnIndex, productId, "p");
      } else {
        removeFromCart(indexAtOrderList);
        updateCountElement();
        updateIncreaseDecreaseQuantityBtns(btnIndex, productId, "p");
      }
    }
  });
}
