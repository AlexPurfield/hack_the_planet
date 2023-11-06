// cartUtils.js
// Utility function to get the current cart from local storage
export function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}
// Utility function to save the cart to local storage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
// Function to add an item to the cart
export function addToCart(item) {
  const cart = getCart();
  // Check if the item already exists in the cart
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1; // If it exists, just increment the quantity
  } else {
    item.quantity = 1; // If not, set quantity to 1
    cart.push(item); // And add the new item to the cart
  }
  saveCart(cart); // Save the updated cart to local storage
}
// Function to remove an item from the cart
export function removeFromCart(itemId) {
  let cart = getCart();
  cart = cart.filter((cartItem) => cartItem.id !== itemId);
  saveCart(cart);
  window.location.reload();
}
// Function to clear the cart
export function clearCart() {
  localStorage.removeItem("cart");
  window.location.reload();
}
