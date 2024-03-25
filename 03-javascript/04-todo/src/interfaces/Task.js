class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getEl() {
    const container = document.createElement("div");
    container.innerText = `${this.title}, ${this.description}, ${this.dueDate}, ${this.priority}`;
    return container;
  }
}

export default Task;
