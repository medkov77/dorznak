export function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function getCart() {
  return localStorage.getItem("cart");
}
