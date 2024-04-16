const footer = Array.from(document.getElementsByTagName("footer"))[0];
footer.innerHTML = `
<img id="logo-header" src="images/logo.png" alt="Bild på logga" />
<nav>
    <ul id="nav-ul">
        <li>
            <a class="header-link" id="home-nav" href="index.html">ДІМ</a>
        </li>
        <li>
            <a class="header-link" id="loan-nav" href="#">LÅN</a>
        </li>
        <li>
            <a class="header-link" id="help-nav" href="#">HJÄLP</a>
        </li>
    </ul>
    <a id="log-in-button" href="log-in.html">Logga in</a>
</nav>`;