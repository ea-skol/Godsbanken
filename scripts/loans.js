const selectedLink = document.getElementById("loan-nav");
selectedLink.id = "selected";

const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");

searchButton.onclick = async (e) => {
    e.preventDefault();
    console.log(e);
    const searchType = document.querySelector('input[name="price"]:checked').value;
    const searchString = searchField.value;
    console.log(searchString, searchType);
    let result = await search(searchString);
}

async function search(string) {
}