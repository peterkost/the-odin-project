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
  this.toggleRead = () => (this.read = !this.read);
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
  const toggleCell = row.insertCell();
  toggleCell.replaceChildren(createButton(handleToggleRead));
  const deleteCell = row.insertCell();
  deleteCell.replaceChildren(createButton(handleDelete));
}

function createButton(onClick) {
  const button = document.createElement("BUTTON");
  button.type = "button";
  button.textContent = "click";
  button.addEventListener("click", onClick);
  return button;
}

function handleToggleRead(event) {
  const row = event.target.closest("tr");
  const bookIndex = row.rowIndex - 1;
  const updatedBook = library[bookIndex];
  updatedBook.toggleRead();

  const readCell = row.getElementsByTagName("td")[3];
  readCell.textContent = updatedBook.read;
}

function handleDelete(event) {
  const row = event.target.closest("tr");
  library.splice(row.rowIndex - 1, 1);
  row.remove();
}
