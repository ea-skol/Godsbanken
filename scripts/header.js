let header = document.getElementById("header");
console.log(header.innerText);
header.innerHTML = `
<img id="logo-header" src="images/logo.png" alt="Bild på logga" />
<nav>
    <ul id="nav-ul">
        <li>
            <a class="header-link" id="home-nav" href="#">ДІМ</a>
        </li>
        <li>
            <a class="header-link" id="loan-nav" href="#">LÅN</a>
        </li>
        <li>
            <a class="header-link" id="help-nav" href="#">HJÄLP</a>
        </li>
    </ul>
    <a id="log-in" href="#">Logga in</a>
</nav>`;