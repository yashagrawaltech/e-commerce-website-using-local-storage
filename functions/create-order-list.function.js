import { filterUniqueItems } from "./filter-unique-items.function.js";

export function createOrderList(orderList, cart) {
  //   console.log(orderList);
  //   console.log(cart);

  orderList = [];
  const order = filterUniqueItems(cart);
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
