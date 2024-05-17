const selectedLink = document.getElementById("help-nav");
selectedLink.id = "selected";

const form = document.getElementById("contact-us-form");
const submitButton = document.getElementById("trash-submit");
const termsBox = document.getElementById("terms-of-service");


submitButton.onclick = (e) => {
    e.preventDefault();
    if (termsBox.checked) {
        window.location.href = "sent-contact.html";
    }
    else {
        form.insertAdjacentHTML("afterend",'<p id="must-check">Du måste acceptera våra terms innan du kan skicka ditt ärende.</p>');
    }
}