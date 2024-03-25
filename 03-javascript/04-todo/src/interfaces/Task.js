import task from "../sections/taskView/task";

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getEl() {
    console.log(this);
    return task(this);
  }
}

export default Task;
