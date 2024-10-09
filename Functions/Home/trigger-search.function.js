import { displaySearchSuggestions } from "./display-search-suggestions.function.js";

export function triggerSearch() {
  const searchInputElement = document.querySelector(".search-input");
  const searchContainer = document.querySelector(".search-container");
  const searchForm = document.querySelector(".search-form");

  searchInputElement.addEventListener("focus", () => {
    searchContainer.classList.remove("hidden");
    displaySearchSuggestions();
  });

  searchContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("search-result")) {
      const searchElement = e.target;
      // console.log(searchElement);

      const searchElementText = searchElement.querySelector(".product-name");
      const searchText = searchElementText.textContent.trim();
      searchInputElement.value = searchText;
      // console.log(searchText)

      searchForm.submit();
    }
  });

  searchInputElement.addEventListener("blur", (e) => {
    setTimeout(() => {
      searchContainer.classList.add("hidden");
    }, 250);
  });
}
