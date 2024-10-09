import { filterUniqueItems } from "./filter-unique-items.utility.js";

// create-order-list.utility.js
export function createOrderList() {
  //   console.log(cart);
  let orderList = [];
  const order = filterUniqueItems();
  //   console.log(order);

  function createOrder(product, quantity) {
    return {
      product,
      quantity,
      orderValue: quantity * product.product_price,
    };
  }

  order.forEach((product) => {
    orderList.push(createOrder(product.item, product.count));
  });

  return orderList;
}
