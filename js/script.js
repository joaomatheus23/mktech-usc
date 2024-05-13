const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const username = "admin";
const password = "admin";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (usernameInput.value === username && passwordInput.value === password) {
    window.location.href = "home.html";
  } else {
    alert("Usuário ou senha inválidos.");
  }

  usernameInput.value = "";
  passwordInput.value = "";
});

function mostrarSenha() {
    var senha = document.getElementById("password");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }

function redirecionar() {
    window.location.href = "checkpage.html";
}
