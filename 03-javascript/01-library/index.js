const table = document.getElementById("library-table");
const dialog = document.getElementById("add-dialog");
const form = document.getElementById("form");
const openButton = document.getElementById("open-button");

openButton.addEventListener("click", () => dialog.showModal());
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newBook = createBookFromForm();
  addBookToLibrary(newBook);
  dialog.close();
});

function Book(title, author, pageCount, read) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
  this.info = () =>
    `${this.title} by ${this.author}, ${pageCount} pages, ${read ? "already read" : "not read yet"}`;
}

const library = [];

function mockLibrary() {
  for (let i = 0; i < 5; i++) {
    const book = new Book(i, i, i, true);
    addBookToLibrary(book);
  }
}
mockLibrary();

function createBookFromForm() {
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  return new Book(
    values.title,
    values.author,
    values.pageCount,
    values.hasOwnProperty("read") ? true : false,
  );
}

function addBookToLibrary(book) {
  library.push(book);
  displayBook(book);
}

function displayBook(book) {
  const row = table.insertRow();
  const titleCell = row.insertCell();
  titleCell.textContent = book.title;
  const authorCell = row.insertCell();
  authorCell.textContent = book.author;
  const pageCountCell = row.insertCell();
  pageCountCell.textContent = book.pageCount;
  const readCell = row.insertCell();
  readCell.textContent = book.read;
}
