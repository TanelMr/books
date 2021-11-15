// assign variables

const authorInput = document.querySelector("#authorInput");
const titleInput = document.querySelector("#titleInput");
const ISBNInput = document.querySelector("#ISBN");
const form = document.querySelector("form");
const booksList = document.querySelector("tbody");

//add event listeners for buttons
form.addEventListener("submit", addBook);
booksList.addEventListener("click", deleteTask);



// function for deleting books
function deleteTask(event){
    if(event.target.textContent == "X"){
        event.target.parent.parentElement.remove();
        }
}

// function for adding books
function addBook (event) {

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

    //same logic for book title
    const title = titleInput.value;
    const titleText = document.createTextNode(title);
    const tdTitle = document.createElement("td");
    tdTitle.appendChild(titleText);
    tr.appendChild(tdTitle);


    //same logic for book ISBN
    const ISBN = ISBNInput.value;
    const ISBNtext = document.createTextNode(ISBN);
    const tdISBN = document.createElement("td");
    tdISBN.appendChild(ISBNtext);
    tr.appendChild(tdISBN);
    ISBN.value = "";


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
}