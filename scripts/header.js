const header = document.querySelector("header");

header.innerHTML = `
<img id="logo-header" src="images/logo.png" alt="Godsbanken logga" />
<nav>
    <ul id="nav-ul">
        <li>
            <a class="header-link" id="home-nav" href="index.html">HEM</a>
        </li>
        <li>
            <a class="header-link" id="loan-nav" href="loans.html">LÅN</a>
        </li>
        <li>
            <a class="header-link" id="help-nav" href="help.html">HJÄLP</a>
        </li>
    </ul>
    <a id="log-in-button" href="log-in.html">Logga in</a>
</nav>`;

header.insertAdjacentHTML("beforebegin",'<div id="hamburger-menu">E</div>');

const hamburger = document.getElementById("hamburger-menu");
let classBool = 0;

hamburger.onclick = () => {
    classBool++;
    classBool %= 2;
    if (classBool == 0) {
        header.className = "";
    }
    if (classBool == 1) {
        header.className = "head-viz";
    }
}

// const headerLinks = Array.from(document.getElementsByClassName('header-link'));
// const logIn = document.getElementById("log-in-button");
// var flag = false;

// window.onmouseup = () => { flag = false; }

// headerLinks.forEach(link => {
//     link.onmouseover = () => {
//         if(flag) {
//             link.classList.add("clicked");
//         }
//     }
//     link.onmousedown = () => {
//         link.classList.add("clicked");
//         flag = true;
//     }
//     link.onmouseup = () => {
//         link.classList.remove("clicked");
//     }
// });

// logIn.onmouseover = () => {
//     if(flag) {
//         logIn.classList.add("clicked");
//     }
// }
// logIn.onmousedown = () => {
//     logIn.classList.add("clicked");
//     flag = true;
// }
// logIn.onmouseup = () => {
//     logIn.classList.remove("clicked");
// }