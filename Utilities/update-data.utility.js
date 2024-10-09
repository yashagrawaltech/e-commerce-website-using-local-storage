import liveCartData from "../Data/live-cart.data.js";
import localCartData from "../Data/local-cart.data.js";
import orderListData from "../Data/order-list.data.js";
import { createOrderList } from "./create-order-list.utility.js";

export function updateData() {
  localCartData.updateData(liveCartData.getData());
  orderListData.updateData(createOrderList());
}
