import liveCartData from "../Data/live-cart.data.js";

export function calculateTotalBill() {
  const liveCart = liveCartData.getData();
  let sum = 0;
  liveCart.forEach((e) => {
    sum = sum + e.product_price;
  });
  return sum;
}
