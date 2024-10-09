import { products } from "../../Data/products.data.js";

export function displaySearchSuggestions() {
  const searchInputElement = document.querySelector(".search-input");
  const searchInputList = document.querySelector(".search-result-list");

  searchInputList.innerHTML = "";
  let searchInput = "";

  searchInputElement.addEventListener("input", () => {
    searchInput = searchInputElement.value.trim().toLowerCase();

    if (searchInput !== "") {
      const filteredArray = products.filter((item) => {
        return item.product_name.toLowerCase().trim().startsWith(searchInput);
      });
      // console.log(filteredArray);
      // console.log(filteredArray.length);

      searchInputList.innerHTML = "";

      if (filteredArray.length > 0) {
        filteredArray.forEach((e) => {
          searchInputList.innerHTML += `
            <li
                  class="search-result w-full hover:bg-zinc-200 p-[0.5rem]"
                  data-product-id="${e.product_id}"
                  data-index="${e.index}"
                >
                  <div
                    class="search w-full flex items-center justify-start gap-4 pointer-events-none"
                    data-product-id="${e.product_id}"
                    data-index="${e.index}"
                  >
                    <div
                      class="search-icon w-[2rem] h-[2rem] flex items-center justify-center shrink-0"
                    >
                      <i class="ri-search-line text-xl pointer-events-none"></i>
                    </div>
                    <div
                      class="product-name w-[50%] font-[Rubik] text-left"
                      data-product-id="${e.product_id}"
                      data-index="${e.index}"
                    >
                      ${e.product_name}
                    </div>
                  </div>
                </li>
            `;
        });
      } else {
        searchInputList.innerHTML = "";
      }
    } else {
      searchInputList.innerHTML = "";
    }
  });
}
