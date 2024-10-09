import orderListData from "../Data/order-list.data.js";

export function updateIncreaseDecreaseQuantityBtns(
  index,
  productId,
  container
) {
  const orderList = orderListData.getData();
  const btnIndex = index;
  const inOrderList = orderList.find(
    (element) => element.product.product_id === productId
  );

  let currentContainer;
  let currentProductElement;

  if (container === "p") {
    currentContainer = document.querySelector(".products-container");
  }
  if (container === "c") {
    currentContainer = document.querySelector(".cart-container");
    currentProductElement = document.querySelector(
      `.cart-product[data-index="${index}"]`
    );
  }

  const addToCartBtn = currentContainer.querySelector(
    `.add-to-cart-btn[data-index="${btnIndex}"]`
  );
  const incOrDecQuantityBtns = currentContainer.querySelector(
    `.inc-or-dec-quantity-btns[data-index="${btnIndex}"]`
  );
  const productQuantityElement = currentContainer.querySelector(
    `.quantity-in-cart[data-index="${btnIndex}"]`
  );

  if (container === "p" && inOrderList) {
    const quantity = inOrderList.quantity;
    productQuantityElement.textContent = quantity;
    addToCartBtn.classList.add("hidden");
    incOrDecQuantityBtns.classList.remove("hidden");
  }

  if (container === "p" && !inOrderList) {
    addToCartBtn.classList.remove("hidden");
    incOrDecQuantityBtns.classList.add("hidden");
  }

  if (container === "c" && inOrderList) {
    const quantity = inOrderList.quantity;
    productQuantityElement.textContent = quantity;
  }

  if (container === "c" && !inOrderList) {
    currentProductElement.remove();
  }
}
