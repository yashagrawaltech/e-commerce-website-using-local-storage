import liveCartData from "../Data/live-cart.data.js";

const cart = liveCartData.getData();

export function filterUniqueItems() {
  const seen = new Set();
  const duplicates = [];
  cart.forEach((item) => {
    const itemString = JSON.stringify(item);
    const existingItem = duplicates.find(
      (dup) => dup.itemString === itemString
    );
    if (existingItem) {
      existingItem.count++;
    } else {
      duplicates.push({ item, count: 1, itemString });
    }
    seen.add(itemString);
  });
  return duplicates;
}
