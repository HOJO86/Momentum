const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginTitle = document.querySelector("#login h2")
const greeting = document.querySelector("#greeting");
const hello = document.querySelector("#greeting span:first-child");
const inputName = document.querySelector("#greeting span:last-child");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginTitle.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    hello.innerText = `안녕하세요!`;
    inputName.innerText = `${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginTitle.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}