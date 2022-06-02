const form = document.querySelector("form");

const name = document.querySelector("#name");
const message = document.querySelector("#message");
const email = document.querySelector("#email");
const thanks = document.querySelector("#thanks");

const errorName = document.querySelector("#errorName");
const errorMessage = document.querySelector("#errorMessage");
const errorEmail = document.querySelector("#errorEmail");

const emailPattern = /\S+@\S+\.\S+/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorName.innerText = "";
  errorMessage.innerText = "";
  errorEmail.innerText = "";
  let errorAlert = false;

  if (name.value == "") {
    errorName.innerText = "Please provide a name";
    errorAlert = true;
  }

  if (message.value.length < 10) {
    errorMessage.innerText = "Please provide a message more than 10 characters";
    errorAlert = true;
  }

  if (!emailPattern.test(email.value)) {
    errorEmail.innerText = "Provide email-address";
    errorAlert = true;
  }

  if (!errorAlert) {
    thanks.innerText = "Thank you for contacting us!";
  }
});
