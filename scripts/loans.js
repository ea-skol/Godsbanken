const selectedLink = document.getElementById("loan-nav");
selectedLink.id = "selected";

const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");

const backPage = document.getElementById("page-back");
const forPage = document.getElementById("page-forward");
const pageNumber = document.getElementById("page-number");
const resultDiv = document.getElementById("results");

let page = 1;
let maxPage = 1;

backPage.onclick = () => {
    page--;
    if (page < 1) {
        page = 1;
    }
    api();
    pageNumber.innerText = `${page}/${maxPage}`;
}

forPage.onclick = () => {
    page++;
    if (page > maxPage) {
        page = maxPage;
    }
    api();
    pageNumber.innerText = `${page}/${maxPage}`;
}

searchButton.onclick = (e) => {
    e.preventDefault();
    api();
}

async function api() {
    const searchString = searchField.value;
    let result = await search(searchString);
    maxPage = result.total_pages;
    pageNumber.innerText = `${page}/${maxPage}`;
    render(result);
    console.log(result)
    console.log(maxPage);
}

async function search(string) {
    let apiKey = "80067d0dcb47ca42c10631b4e43911a3";
    var url = `https://api.themoviedb.org/3/search/movie?query=${string}&api_key=${apiKey}&page=${page}`;
    let result = await fetch(url);
    let json = await result.json();
    return json;
}

function render(result) {
    resultDiv.innerHTML = "";
    let allResults = result.results;
    allResults.forEach(object => {
        console.log(object);
        resultDiv.innerHTML += `
        <div id="movie-table-div">
            <table class="movie-table">
                <tr>
                <th>Titel</th>
                <th>Släpptes</th>
                </tr>
                <tr>
                <td>${object.title}</td>
                <td>${object.release_date}</td>
                </tr>
            </table>
        </div>`;
    });
}