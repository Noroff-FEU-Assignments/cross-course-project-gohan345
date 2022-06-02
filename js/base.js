let jackets = document.querySelectorAll(".cart-add");

let products = [
  {
    name: "Blue Jacket",
    tag: "bluerainjacket",
    price: 40,
    inCart: 0,
  },
  {
    name: "Gray Jacket",
    tag: "grayrainjacket",
    price: 40,
    inCart: 0,
  },
  {
    name: "Yellow Jacket",
    tag: "yellowrainjacket",
    price: 40,
    inCart: 0,
  },
  {
    name: "Green Jacket",
    tag: "greenrainjacket",
    price: 40,
    inCart: 0,
  },
  {
    name: "Teal Jacket",
    tag: "tealrainjacket",
    price: 40,
    inCart: 0,
  },
  {
    name: "Pink Jacket",
    tag: "pinkrainjacket",
    price: 40,
    inCart: 0,
  },
];

for (let i = 0; i < jackets.length; i++) {
  jackets[i].addEventListener("click", () => {
    jacketNumbers(products[i]);
    totalCost(products[i]);
  });
}

function loadCartNumbers() {
  let productList = localStorage.getItem("jacketNumbers");

  if (productList) {
    document.querySelector(".cart span").textContent = productList;
  }
}

function jacketNumbers(product) {
  let productList = localStorage.getItem("jacketNumbers");

  productList = parseInt(productList);

  if (productList) {
    localStorage.setItem("jacketNumbers", productList + 1);
    document.querySelector(".cart span").textContent = productList + 1;
  } else {
    localStorage.setItem("jacketNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems !== null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;

    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let jacketCost = localStorage.getItem("totalCost");

  if (jacketCost != null) {
    jacketCost = parseFloat(jacketCost);
    localStorage.setItem("totalCost", jacketCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function showCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartTotal = document.querySelector(".cart-total");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
        <div class="product">
        <img src="images/${item.tag}.jpg"></img>
        <div class="product-information">
        <strong>${item.name}</strong>        
        <span class="price">$${item.price}</span>
        </div>
        <div class="cart-information">
        <span class="amount">x${item.inCart}</span>
        <span class="total">$${item.inCart * item.price},00</span>
        </div>
        </div>
        `;
    });

    if (cartTotal) {
      let totalCost = localStorage.getItem("totalCost");
      if (totalCost)
        cartTotal.innerText = `$${parseFloat(totalCost).toFixed(2)}`;
    }
  }
}

loadCartNumbers();
showCart();
