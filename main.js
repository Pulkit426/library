let myLibrary = []

function Book(title, author, pages, readStatus){
this.title = title
this.author = author
this.pages = pages
this.readStatus = readStatus ? "Read" : "Not Read"
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

var book1  = new Book("A Game of Thrones","George R. R. Martin",694, "Read")
var book2 = new Book("To Kill a Mockingbird","Harper Lee",336)
var book3 = new Book("1984","George Orwell", 328, "Not Read")
var book4 = new Book("Atomic Habits","James Clear",320, "Read")
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)

var bookDisplayContainer = document.querySelector(".book-display")

function displayBook(book){
    console.log(book)
    let bookCard= document.createElement('div')
    bookCard.classList.add('card')

    let bookDivTitle = document.createElement("div")
    bookDivTitle.innerText = ` ${book.title}`
    bookDivTitle.style.color = "brown"
    bookDivTitle.style.fontSize = "larger"
    bookCard.appendChild(bookDivTitle)

    let bookDivAuthor = document.createElement("div")
    bookDivAuthor.innerText = ` ${book.author}`
    bookCard.appendChild(bookDivAuthor)

    let bookDivPages = document.createElement("div")
    bookDivPages.innerText = ` ${book.pages} Pages`
    bookCard.appendChild(bookDivPages)

    let bookDivRead = document.createElement("button")
    bookDivRead.innerText = `${book.readStatus}`
    bookDivRead.classList.add("toggle-read-button")
    bookCard.appendChild(bookDivRead)

    bookDivRead.addEventListener('click', () => {
        let readStatus = bookDivRead.innerText
        bookDivRead.innerHTML = ''
        bookDivRead.innerText = readStatus==="Read" ? "Not Read" : "Read"
    })


    let removeButton = document.createElement("button")
    removeButton.innerText= "Remove"
    removeButton.classList.add("remove-book-button")
    removeButton.addEventListener('click', () => removeBook(book))

   
    bookCard.appendChild(removeButton)
    bookDisplayContainer.appendChild(bookCard)
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
    let bookValues = Array.from(formData).map( (item) =>  item.name!=="readStatus" ? item.value : item.checked) 
    if(!bookValues.every(item => item!="" || (item===true || item===false))){
        alert("Please Enter all the Values")
        return 
    }
    console.log("BOOK VALUES", bookValues)

    var newBook =  new Book(...bookValues)
    addBookToLibrary(newBook)
    displayBook(newBook)

    document.book-form.reset()
})

var formElement = document.querySelector('#form')
var addBookButton = document.querySelector('.add-book-button')
var returnButton = document.querySelector('.return-button')

addBookButton.addEventListener('click', () => {
    addBookButton.classList.toggle('hidden')
    formElement.classList.toggle('hidden')
})

returnButton.addEventListener('click', () => {
    addBookButton.classList.toggle('hidden')
    formElement.classList.toggle('hidden')
})