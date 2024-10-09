import liveCartData from "../../Data/live-cart.data.js";
import orderListData from "../../Data/order-list.data.js";
import { products } from "../../Data/products.data.js";
import { addToCart } from "../../Utilities/add-to-cart.utility.js";
import { removeFromCart } from "../../Utilities/remove-from-cart.utility.js";
import { updateIncreaseDecreaseQuantityBtns } from "../../Utilities/update-inc-dec-quan-btn.utility.js";
import { updateBill } from "./update-bill.function.js";
import { updateOrderValue } from "./update-order-value.function.js";

export function triggerIncreaseDecreaseProductBtnInCart() {
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
      const productId = e.target.dataset.productId;
      const btnIndex = e.target.dataset.index;
      const productIndex = products.findIndex(
        (element) => element.product_id === productId
      );

      const product = products[productIndex];

      addToCart(product);
      updateBill();
      updateIncreaseDecreaseQuantityBtns(btnIndex, productId, "c");

      const orderListProductIndex = orderListData
        .getData()
        .findIndex((element) => element.product.product_id === productId);
      const orderListProduct = orderListData.getData()[orderListProductIndex];
      //   console.log(orderListProduct);
      updateOrderValue(btnIndex, orderListProduct.orderValue);
    }

    if (e.target.classList.contains("less")) {
      const productId = e.target.dataset.productId;
      const btnIndex = e.target.dataset.index;

      const productIndexInLiveCart = liveCartData
        .getData()
        .findIndex((element) => element.product_id === productId);

      removeFromCart(productIndexInLiveCart);
      updateBill();

      //   console.log(orderListData.getData());
      let indexAtOrderList = orderListData
        .getData()
        .findIndex((element) => element.product.product_id === productId);

      const orderListProduct = orderListData.getData()[indexAtOrderList];
      //   console.log(orderListProduct);

      if (orderListProduct) {
        updateOrderValue(btnIndex, orderListProduct.orderValue);
        updateIncreaseDecreaseQuantityBtns(btnIndex, productId, "c");
      } else {
        updateBill();
        updateIncreaseDecreaseQuantityBtns(btnIndex, productId, "c");
      }
    }
  });
}
