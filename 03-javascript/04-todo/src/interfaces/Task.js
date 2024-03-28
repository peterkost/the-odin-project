import task from "../sections/taskView/task";
import { v4 as uuid } from "uuid";

class Task {
  constructor(title, description, dueDate, priority, projectId) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.id = uuid();
    this.projectId = projectId;
  }

  getEl() {
    return task(this);
  }

  getDateString() {
    return `${this.dueDate.getFullYear()}-${this.dueDate.getMonth().toString().padStart(2, "0")}-${this.dueDate.getDay().toString().padStart(2, "0")}`;
  }
}

export default Task;
