function login() {
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("senha").value;
  
    if (username === "admin" && password === "adminteste") {
      window.location.href = "../html/home.png";
    } else {
      alert("Usuário ou senha inválidos.");
    }
  }