const baseUrl =
  "https://rainydays.sakonsa.one/wp-json/wc/v3/products?consumer_key=ck_b37247f78d5446d421681e521aa9d3cfbc4255dd&consumer_secret=cs_52393298ee5af9bb5d04bf75f29d3509f57fbf65";
const productsContainer = document.querySelector(".jacket-list");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  products.forEach(function (product) {
    productsContainer.innerHTML += `
    <div class="jacket-product">
          <img
            class="jacket-img"
            src="${product.images[0].src}"
            alt="${product.name}"
          />
          <h2 class="jacket-title">${product.name}</h2>
          <h3 class="jacket-price">${product.price}</h3>
          <button onclick="addCartItem(${product.id}, 1)" class="class-cta cart-add jacket1">Add to cart</button>
          <a href="spesific.html?id=${product.id}" class="class-cta">View Item</a>
        </div>`;
  });
}

getProducts(baseUrl);
