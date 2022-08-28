const detailContainer = document.querySelector(".spesific-list");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rainydays.sakonsa.one/wp-json/wc/store/products/" + id;

async function getJackets() {
  const response = await fetch(url);
  const details = await response.json();

  console.log(details);
  createHTML(details);
}

getJackets();

function createHTML(jackets) {
  detailContainer.innerHTML = `
    <h1 class="blue-raincoat">${jackets.name}</h1>
      <section class="spesific-list">
        <div class="spesific-product">
          <img
            src="${jackets.images[0].src}"
            alt="${jackets.name}"
          />
          <h2>${jackets.prices.price}</h2>
          <p>comfortable rain jackets for bad weather</p>
          <a href="checkout.html" class="spesific-cta">Add to Cart</a>`;
}
