import { qS } from "./utils.js";
const userName = qS("input[name='username']");
const userPassword = qS("input[name='password']");
const loginForm = qS(".loginForm");
const errorMsg = qS(".modal-error");

const myLogin = {
  username: "sonia",
  password: "1111",
};

window.onload = init();

function init() {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    userLogin();
  });
}

function userLogin() {
  let nameVal = userName.value,
    passwordVal = userPassword.value;

  if (nameVal === myLogin.username && passwordVal === myLogin.password) {
    loginForm.remove();
    //devi creare MyList
  } else {
    errorMsg.classList.add("enabled");
    loginForm.append(errorMsg);

    setTimeout(function () {
      errorMsg.classList.remove("enabled");
      loginForm.reset();
    }, 2000);
  }
}

// non funziona
