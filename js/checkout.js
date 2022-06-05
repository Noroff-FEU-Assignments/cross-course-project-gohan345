const checkoutForm = document.querySelector("form");

const email = document.querySelector("#email");
const emailErrors = document.querySelector("#emailErrors");
const name = document.querySelector("#name");
const nameErrors = document.querySelector("#nameErrors");
const address = document.querySelector("#address");
const addressErrors = document.querySelector("#addressErrors");

const emailPattern = /\S+@\S+\.\S+/;

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  nameErrors.innerText = "";
  emailErrors.innerText = "";
  addressErrors.innerText = "";

  if (name.value == "") {
    nameErrors.innerText = "Please provide a name";
  }

  if (!emailPattern.test(email.value)) {
    emailErrors.innerText = "Provide email-address";
  }

  if (!address.value || address.value.length < 10) {
    addressErrors.innerText = "Please enter a valid address";
  }
});
