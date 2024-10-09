import orderListData from "../../Data/order-list.data.js";

export function displayCartItems() {
  const orderList = orderListData.getData();
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.innerHTML = "";
  orderList.forEach((e, index) => {
    cartContainer.innerHTML += `
        <div
      data-product-id="${e.product.product_id}"
      data-index="${index}"
      class="cart-product w-full grid grid-cols-5 gap-[1rem] pb-[1rem] bg-white border-b-[0.01rem] border-solid border-black"
    >
      <img
        class="aspect-square bg-zinc-200"
        src="${e.product.product_img}"
        alt=""
      />
      <div class="cart-product-info col-span-3 flex flex-col justify-between">
        <div>
          <p class="font-medium text-2xl">${e.product.product_name}</p>
          <p class="text-xl">₹${e.product.product_price}</p>
          <p class="text-base">${e.product.product_seller}</p>
          <p class="text-lg">${e.product.product_desc}</p>
        </div>
        <div class="increase-decrease-quantity flex gap-[1rem] items-center">
          <button
            data-product-id="${e.product.product_id}"
            data-index="${index}"
            class="less h-[2rem] w-[2rem] flex justify-center items-center shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] rounded-xl"
          >
            <i class="ri-subtract-line pointer-events-none"></i>
          </button>
          <p
            data-product-id="${e.product.product_id}"
            data-index="${index}"
            class="quantity-in-cart"
          >
            ${e.quantity}
          </p>
          <button
            data-product-id="${e.product.product_id}"
            data-index="${index}"
            class="add h-[2rem] w-[2rem] flex justify-center items-center shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] rounded-xl"
          >
            <i class="ri-add-line pointer-events-none"></i>
          </button>
        </div>
      </div>
      <div class="total-price flex h-full justify-end items-end">
        <p
          data-product-id="${e.product.product_id}"
          data-index="${index}"
          class="item-order-value text-xl"
        >
          ₹${e.orderValue}
        </p>
      </div>
    </div>
        `;
  });
}
