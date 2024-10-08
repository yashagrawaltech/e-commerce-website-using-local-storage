import { products } from "./data/products.data.js";
import { addToCart } from "./functions/add-to-cart.function.js";
import { createOrderList } from "./functions/create-order-list.function.js";
import { displayProducts } from "./functions/display-products.function.js";
import { loadProductBtns } from "./functions/load-product.btns.function.js";
import { removeFromList } from "./functions/remove-from-cart.function.js";
import { saveCartToLocalStorage } from "./functions/save-cart-to-local.function.js";
import { triggerSearch } from "./functions/trigger-search.function.js";
import { updateAddToCartBtn } from "./functions/update-add-to-cart-btn.function.js";
import { updateCountElement } from "./functions/update-count-elem.function.js";
import { updateIncreaseDecreaseProductBtns } from "./functions/update-inc-dec-quantity-btn.function.js";

let localCart = JSON.parse(localStorage.getItem("local-cart")) || [];
let liveCart = Array.from(localCart);
let orderList;
orderList = createOrderList(orderList, liveCart);
// console.log(localCart);
// console.log(liveCart);
// console.log(orderList);

function triggerAddToCartBtn() {
  const productContainer = document.querySelector(".products-container");
  productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart-btn")) {
      const productId = e.target.dataset.productId;
      const btnIndex = e.target.dataset.index;
      // console.log(productIndex)
      // console.log(productId)

      const productIndex = products.findIndex(
        (element) => element.product_id === productId
      );

      // console.log(productIndex);

      addToCart(liveCart, products[productIndex]);
      // console.log(liveCart);

      updateCountElement(liveCart);

      localCart = saveCartToLocalStorage(localCart, liveCart);
      liveCart = Array.from(localCart);
      // console.log(localCart);

      orderList = createOrderList(orderList, liveCart);
      // console.log(orderList);

      updateAddToCartBtn(btnIndex, productId, orderList);
      updateIncreaseDecreaseProductBtns(btnIndex, productId, orderList);
    }
  });
}

function triggerIncreaseDecreaseProductBtn() {
  const productContainer = document.querySelector(".products-container");
  productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
      const productId = e.target.dataset.productId;
      const btnIndex = e.target.dataset.index;
      const productIndex = products.findIndex(
        (element) => element.product_id === productId
      );

      addToCart(liveCart, products[productIndex]);
      updateCountElement(liveCart);

      localCart = saveCartToLocalStorage(localCart, liveCart);
      liveCart = Array.from(localCart);
      // console.log(localCart);

      orderList = createOrderList(orderList, liveCart);
      // console.log(orderList);

      updateIncreaseDecreaseProductBtns(btnIndex, productId, orderList);
    }

    if (e.target.classList.contains("less")) {
      const productId = e.target.dataset.productId;
      const btnIndex = e.target.dataset.index;
      let indexAtOrderList = orderList.findIndex(
        (element) => element.product.product_id === productId
      );
      let quantity = orderList[indexAtOrderList].quantity;

      if (quantity !== 0) {
        const productIndexInLiveCart = liveCart.findIndex(
          (element) => element.product_id === productId
        );

        removeFromList(liveCart, productIndexInLiveCart);
        updateCountElement(liveCart);
        localCart = saveCartToLocalStorage(localCart, liveCart);
        liveCart = Array.from(localCart);
        // console.log(localCart);

        orderList = createOrderList(orderList, liveCart);
        // console.log(orderList);

        updateIncreaseDecreaseProductBtns(btnIndex, productId, orderList);
      }

      if (quantity === 0) {
        removeFromList(orderList, indexAtOrderList);
        updateCountElement(liveCart);
        updateIncreaseDecreaseProductBtns(btnIndex, productId, orderList);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  updateCountElement(liveCart);
  triggerAddToCartBtn();
  loadProductBtns(orderList);
  triggerIncreaseDecreaseProductBtn();
  triggerSearch();
});
