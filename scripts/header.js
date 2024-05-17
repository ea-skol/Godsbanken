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

header.insertAdjacentHTML("beforebegin",'<div id="hamb-menu-div"><div id="hamburger-menu">Ξ</div><div id="hamb-background"></div></div>');

const hamburger = document.getElementById("hamburger-menu");
const hambBack = document.getElementById("hamb-background");
let classBool = 0;

hamburger.onclick = () => {
    classBool++;
    classBool %= 2;
    if (classBool == 0) {
        header.className = "";
        hambBack.className = "";
    }
    if (classBool == 1) {
        header.className = "head-viz";
        hambBack.className = "head-viz";
    }
}