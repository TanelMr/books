//variables
const form = document.querySelector("form");
const booksList = document.querySelector(".table");

//event listeners
form.addEventListener("submit", addBook);
booksList.addEventListener("click", deleteTask);
document.addEventListener("DOMContentLoaded", getBooksFromLocalStorage);

function getBooksFromLocalStorage (){
    let books;
    // check if an array has been created
    if(localStorage.getItem("books") === null){
        books = [];
    }
    else {
        books = JSON.parse(localStorage.getItem("books"));
    }
    for(let i=0; i<books.length; i++){
        let book = books[i];
        const tr = document.createElement("tr")
        for(let i=0; i<book.length; i++) {
        let td = document.createElement("td");
        let bookText = document.createTextNode(book[i]);
        td.appendChild(bookText);
        tr.appendChild(td);
        }
        //create link element
        const link = document.createElement("a");
        //add href
        link.setAttribute("href", "#");
        // add "X" text to link
        link.appendChild(document.createTextNode("X"));
        // create td for X
        const tdX = document.createElement("td");
        //add link to td
        tdX.appendChild(link);
        tr.appendChild(tdX);
        booksList.appendChild(tr);
    }
    }

// function for adding books
function addBook (event) {

    const authorInput = document.querySelector("#authorInput");
    const titleInput = document.querySelector("#titleInput");
    const ISBNInput = document.querySelector("#ISBN");

    //create table row
    const tr = document.createElement("tr")
    //define table body element
    const tbody = document.querySelector("tbody")
    //add table row to table body
    tbody.appendChild(tr)



    //define input value for author
    const author = authorInput.value;
    //create td element for value
    const tdAuthor = document.createElement("td");
    // create text value for author
    const authorText = document.createTextNode(author);
    //add text to table data
    tdAuthor.appendChild(authorText)
    //add table data to table row
    tr.appendChild(tdAuthor);
    //clear input
    authorInput.value = "";

    //same logic for book title
    const title = titleInput.value;
    const titleText = document.createTextNode(title);
    const tdTitle = document.createElement("td");
    tdTitle.appendChild(titleText);
    tr.appendChild(tdTitle);
    titleInput.value = "";


    //same logic for book ISBN
    const ISBN = ISBNInput.value;
    const ISBNtext = document.createTextNode(ISBN);
    const tdISBN = document.createElement("td");
    tdISBN.appendChild(ISBNtext);
    tr.appendChild(tdISBN);
    ISBNInput.value = "";


    //create link element
    const link = document.createElement("a");
    //add href
    link.setAttribute("href", "#");
    // add "X" text to link
    link.appendChild(document.createTextNode("X"));
    // create td for X
    const tdX = document.createElement("td");
    //add link to td
    tdX.appendChild(link);
    tr.appendChild(tdX);

    //add book to localstorage
    const book = [author, title, ISBN];
    addBookToLocalStorage(book)

    event.preventDefault();
}

// add book to localstorage
function addBookToLocalStorage(book){
    let books;

    if(localStorage.getItem("books") === null){
        books = [];
    }
    else {
        books = JSON.parse(localStorage.getItem("books"));
    }
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
}

// delete single book
function deleteTask(event){
    if(event.target.textContent == "X"){
        event.target.parentElement.parentElement.remove();
    }

    let getBookISBN = event.target.parentElement.previousElementSibling.textContent;
    deleteBookFromLocalStorage(getBookISBN);
}

// delete book from localstorage
function deleteBookFromLocalStorage(getBookISBN){
    let books;
    if(localStorage.getItem("books") === null){
        books = [];
    }
    else {
        books = JSON.parse(localStorage.getItem("books"));
    }
    //loop through each array element
    books.forEach(
        function (book, index){
        if(book[2] === getBookISBN) {
            books.splice(index, 1);
        }
    });
    localStorage.setItem("books", JSON.stringify(books));
}