const form = document.querySelector("form");
const input = document.querySelector("[name='isbn']");
const info = document.querySelector(".book-info");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const isbn = input.value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
        }).then(data => createEl(data.items[0].volumeInfo.title))
        .catch(err => console.warn(err));

}

function createEl(title) {
    const h2 = document.createElement("h2");
    h2.innerText = title;
    info.appendChild(h2)

}