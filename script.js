const mode = document.getElementById("mode_icon");
const form = document.getElementById("login_form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Dark modde
mode.addEventListener("click", () => {
  const form = document.getElementById("login_form");

  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    form.classList.add("dark");
    return;
  }

  mode.classList.add("fa-moon");
  mode.classList.remove("fa-sun");
  form.classList.remove("dark");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// Validation form function
function checkInputs() {
  const userNameValue = userName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const forgotPass = document.getElementById("forgot_password");

  if (userNameValue === "") {
    setErrorFor(userName, "Insira o nome de usuário por favor!");
  }

  if (emailValue === "") {
    setErrorFor(email, "Insira seu email por favor!");
  }

  if (passwordValue === "") {
    setErrorFor(password, "Insira sua senha por favor!");
    forgotPass.style.visibility = "hidden";
  }
}

// Insert error text function
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "input-field error";
}
