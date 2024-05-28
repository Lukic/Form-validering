let form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");

  let isValid = true;
  let erroMessages = [];

  if (nameInput.value.trim() === "") {
    isValid = false;
    nameInput.classList.add("error");
    erroMessages.push("Skriv dit navn");
  } else {
    nameInput.classList.remove("error");
  }

  if (emailInput.value.trim() === "") {
    isValid = false;
    emailInput.classList.add("error");
    erroMessages.push("Skriv en korrekt e-mail");
  } else {
    emailInput.classList.remove("error");
  }

  console.log(erroMessages);

  if (isValid) {
    form.submit();
  }
});
