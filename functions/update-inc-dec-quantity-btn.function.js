export function updateIncreaseDecreaseProductBtns(index, productId, orderList) {
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
  const productQuantityElement = productContainer.querySelector(
    `.quantity-in-cart[data-index="${btnIndex}"]`
  );

  if (inOrderList) {
    const quantity = inOrderList.quantity;
    productQuantityElement.textContent = quantity;
    addToCartBtn.classList.add("hidden");
    incOrDecQuantityBtns.classList.remove("hidden");
  } else {
    addToCartBtn.classList.remove("hidden");
    incOrDecQuantityBtns.classList.add("hidden");
  }
}
