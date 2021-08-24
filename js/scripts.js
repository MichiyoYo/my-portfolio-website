(function () {
  let form = document.querySelector("#contact-form");
  let emailInput = document.querySelector("#email");
  let nameInput = document.querySelector("#name");
  let messageInput = document.querySelector("#message");

  function validateEmail() {
    let value = emailInput.value;
    if (!value) {
      showErrorMessage(emailInput, "Email is a required field!");
      return false;
    }
    if (value.indexOf("@") === -1) {
      showErrorMessage(emailInput, "You must enter a valid email address");
      return false;
    }
    hideErrorMessage(emailInput);
    return true;
  }

  function validateName() {
    let value = nameInput.value;
    if (!value) {
      showErrorMessage(nameInput, "This field is required");
    }
    if (value.length < 3) {
      showErrorMessage(nameInput, "Please insert your full name.");
      return false;
    }
    hideErrorMessage(nameInput);
    return true;
  }

  function validateMessage() {
    let value = messageInput.value;
    if (!value) {
      showErrorMessage(messageInput, "This field is required");
    }
    if (value.length < 10) {
      showErrorMessage(
        messageInput,
        "Please enter a message that's at least 10 characters long."
      );
      return false;
    }
    hideErrorMessage(messageInput);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidName = validateName();
    let isValidMessage = validateMessage();
    return isValidEmail && isValidName && isValidMessage;
  }

  function showErrorMessage(input, message) {
    let inputWrapper = input.parentElement;
    let error = inputWrapper.querySelector(".error-message");
    if (error) {
      inputWrapper.removeChild(error);
    }
    if (message) {
      let error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      inputWrapper.appendChild(error);
    }
  }

  function hideErrorMessage(input) {
    let message = input.parentElement.querySelector(".error-message");
    if (message) {
      input.parentElement.removeChild(message);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      console.log("Success!");
      HTMLFormElement.prototype.submit.call(form);
      console.log("Form Submitted");
    }
  });

  emailInput.addEventListener("input", validateEmail);
  nameInput.addEventListener("input", validateName);
  messageInput.addEventListener("input", validateMessage);
})();
