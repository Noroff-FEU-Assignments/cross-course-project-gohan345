const contactForm = document.querySelector("form");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const emailPattern = /\S+@\S+\.\S+/;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  nameError.innerText = "";
  emailError.innerText = "";
  addressError.innerText = "";

  if (name.value == "") {
    nameError.innerText = "Please provide a name";
  }

  if (!emailPattern.test(email.value)) {
    emailError.innerText = "Provide email-address";
  }

  if (!address.value || address.value.length < 10) {
    addressError.innerText = "Please enter a valid address";
  }
});
