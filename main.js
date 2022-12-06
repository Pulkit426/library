let myLibrary = []

function Book(title, author, pages, readStatus){
this.title = title
this.author = author
this.pages = pages
this.readStatus = readStatus || "Not Read"
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

var book1  = new Book("Game of Thrones","George Martin",1000, "Read")
var book2 = new Book("Harry Potter","JK Rowling",350)
var book3 = new Book("1984","George Orwell", 400, "Not Read")
var book4 = new Book("Atomic Habits","James Clear",250, "Read")
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)

var bookDisplayContainer = document.querySelector(".book-display")

function displayBook(book){
    let bookPara = document.createElement("p")
    let removeButton = document.createElement("button")
    removeButton.innerText= "Remove"
    bookPara.innerText = ` ${book.title} by ${book.author} having ${book.pages} pages, ${book.readStatus}`
    bookDisplayContainer.appendChild(bookPara)
    removeButton.addEventListener('click', () => removeBook(book))
    bookDisplayContainer.appendChild(removeButton)
} 

function removeBook(book){
    myLibrary = myLibrary.filter(item => item.title!=book.title)
    bookDisplayContainer.innerHTML = ''
    displayEveryBook()
}

function displayEveryBook(){
    myLibrary.forEach( (book) => displayBook(book)  )
}
displayEveryBook()



var formData = document.getElementsByTagName('input')

var submitButton = document.querySelector('.submit-button')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    let bookValues = Array.from(formData).map( (item) =>  item.value) 
    var newBook =  new Book(...bookValues)
    addBookToLibrary(newBook)
    displayBook(newBook)
})

