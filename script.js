import { products } from "./data/products.data.js";

function displayProducts() {
  const productContainer = document.querySelector(".products-container");
  productContainer.innerHTML = "";
  products.forEach((e, index) => {
    productContainer.innerHTML += `
        <div
          data-product-id="${e.product_id}"
          data-index="${index}"
          class="product p-[1rem] shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] rounded-xl flex flex-col justify-between"
        >
          <div>
            <img
              class="aspect-square w-fill bg-zinc-200 object-cover overflow-hidden object-center"
              src="${e.product_img}"
              alt=""
            />
            <div class="product-details mt-[1rem]">
              <h2
                class="text-xl font-medium overflow-hidden text-ellipsis line-clamp-2"
              >
                ${e.product_name}
              </h2>
              <h3 class="text-lg">₹${e.product_price}</h3>
              <p class="text-sm text-zinc-600">by - ${e.product_seller}</p>
            </div>
            <div
              class="product-desc overflow-hidden text-ellipsis w-full mt-[0.5rem] line-clamp-2 text-base"
            >
              ${e.product_desc}
            </div>
          </div>
          <div class="product-card-btns">
            <button
              data-product-id="${e.product_id}"
              data-index="${index}"
              class="add-to-cart-btn w-full p-[0.5rem] bg-zinc-400 mt-[1.5rem]"
            >
              Add to cart
            </button>
            <div data-product-id="${e.product_id}"
                data-index="${index}" class="add-more-or-less-btns mt-[1rem] flex justify-between items-center hidden">
              <button
                data-product-id="${e.product_id}"
                data-index="${index}"
                class="less h-[2rem] w-[2rem] flex justify-center items-center shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] rounded-xl"
              >
                <i class="ri-subtract-line pointer-events-none"></i>
              </button>
              <p
                data-product-id="${e.product_id}"
                data-index="${index}"
                class="cart-product-quantity"
              >
                ${e.quantity}
              </p>
              <button
                data-product-id="${e.product_id}"
                data-index="${index}"
                class="add h-[2rem] w-[2rem] flex justify-center items-center shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] rounded-xl"
              >
                <i class="ri-add-line pointer-events-none"></i>
              </button>
            </div>
          </div>
        </div>
        `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
})