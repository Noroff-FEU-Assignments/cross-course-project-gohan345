/*
let cartItems = JSON.parse(localStorage.getItem("cart")) ;


let cartItem = { id: 10, quantity: 2 };
cartItems.push(cartItem);

localStorage.setItem("cart", JSON.stringify(cartItems));

*/

function getCartItems() {
  let items = JSON.parse(localStorage.getItem("cart"));

  if (items) return items;
  else return [];
}

function addCartItem(id, quantity) {
  let cartItems = getCartItems();
  let isItemUpdated = false;

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    if (item.id == id) {
      item.quantity += quantity;
      isItemUpdated = true;
    }
  }

  if (!isItemUpdated) {
    cartItems.push({ id: id, quantity: quantity });
  }

  saveCartItems(cartItems);
}

function saveCartItems(cartItems) {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}
