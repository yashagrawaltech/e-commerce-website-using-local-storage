export function saveCartToLocalStorage(localCart, cart) {
  localCart = cart;
  localStorage.setItem("local-cart", JSON.stringify(localCart));
  return localCart;
}
