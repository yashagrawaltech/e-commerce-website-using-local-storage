export function filterUniqueItems(cart) {
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
