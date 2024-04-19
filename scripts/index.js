const selectedLink = document.getElementById("home-nav");
selectedLink.id = "selected";

const toTopButton = document.getElementById("to-top");

var windowWidth = window.innerWidth;
if (windowWidth < 700) {
    console.log("AAA");
}

function indexLoop() {
    const windowWidth = window.innerWidth;
    const scrollTop = window.scrollY;
    if (scrollTop > 100 && windowWidth > 800) {
        toTopButton.style.display = "block"
    }
    else {
        toTopButton.style.display = "none";
    }
    requestAnimationFrame(indexLoop);
}

requestAnimationFrame(indexLoop);