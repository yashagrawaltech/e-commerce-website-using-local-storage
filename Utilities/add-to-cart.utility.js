import liveCartData from "../Data/live-cart.data.js";
import { updateData } from "./update-data.utility.js";

export function addToCart(product) {
  liveCartData.push(product);
  updateData();
}
