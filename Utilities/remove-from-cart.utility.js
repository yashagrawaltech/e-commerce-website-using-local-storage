import liveCartData from "../Data/live-cart.data.js";
import { updateData } from "./update-data.utility.js";

export function removeFromCart(index) {
  liveCartData.remove(index);
  updateData();
}
