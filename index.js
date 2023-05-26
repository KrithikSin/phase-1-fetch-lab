function fetchBooks() {
    // To pass the tests, don't forget to return your fetch!
    return fetch('https://anapioficeandfire.com/api/books')
        .then((resp) => resp.json())
        .then((json) => renderBooks(json));
}

// Log 5th book in the series
// fetch('https://anapioficeandfire.com/api/books')
//     .then((resp) => resp.json())
//     .then(function (json) {
//         for (let i = 0; i < json.length; i++) {
//             if (i === 5) {
//                 console.log(json[i].name);
//             }
//         }
//     });

// Total number of pages of all the books
// let totalPages = 0;
// fetch('https://anapioficeandfire.com/api/books')
//     .then((resp) => resp.json())
//     .then(function (json) {
//         for (let i = 0; i < json.length; i++) {
//             totalPages += json[i].numberOfPages;
//         }
//         console.log(totalPages);
//     });

function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach((book) => {
        const h2 = document.createElement('h2');
        h2.innerHTML = book.name;
        main.appendChild(h2);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    fetchBooks();
});
