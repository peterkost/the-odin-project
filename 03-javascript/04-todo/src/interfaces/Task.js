import task from "../sections/taskView/task";
import { v4 as uuid } from "uuid";

class Task {
  constructor(title, description, dueDate, priority, projectId) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = uuid();
    this.projectId = projectId;
  }

  getEl() {
    return task(this);
  }
}

export default Task;
