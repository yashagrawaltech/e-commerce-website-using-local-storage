export function updateOrderValue(index, orderValue) {
  const element = document.querySelector(
    `.item-order-value[data-index='${index}']`
  );
  // console.log(element)
  element.textContent = orderValue;
}
