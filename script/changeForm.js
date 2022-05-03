const btnRegister = document.querySelector(".register");

btnRegister.addEventListener("click", function () {
  let displayRegister = document.querySelector(".container__register");
  let displayLogin = document.querySelector(".container__login");
  displayRegister.classList.toggle("active");
  displayLogin.classList.toggle("no__active");
});

const btnLogin = document.querySelector(".login");

btnLogin.addEventListener("click", function () {
  let displayRegister = document.querySelector(".container__register");
  let displayLogin = document.querySelector(".container__login");
  displayRegister.classList.toggle("active");
  displayLogin.classList.toggle("no__active");
});
