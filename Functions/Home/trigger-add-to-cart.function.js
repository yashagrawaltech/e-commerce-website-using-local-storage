import { products } from "../../Data/products.data.js";
import { addToCart } from "../../Utilities/add-to-cart.utility.js";
import { updateAddToCartBtn } from "./update-add-to-cart-btn.function.js";
import { updateCountElement } from "./update-count-elem.function.js";
import { updateIncreaseDecreaseQuantityBtns } from "../../Utilities/update-inc-dec-quan-btn.utility.js";

export function triggerAddToCartBtn() {
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

      const product = products[productIndex];
      addToCart(product);

      updateCountElement();
      updateAddToCartBtn(btnIndex, productId);
      updateIncreaseDecreaseQuantityBtns(btnIndex, productId, "p");
    }
  });
}
