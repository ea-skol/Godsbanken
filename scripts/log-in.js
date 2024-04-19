const submit = document.getElementById("log-in-submit");

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
const password = urlParams.get("password");
console.log(username,password);