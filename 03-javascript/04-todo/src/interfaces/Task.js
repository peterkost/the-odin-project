import task from "../sections/taskView/task";
import { v4 as uuid } from "uuid";
const { format, parse } = require("date-fns");

class Task {
  constructor(title, description, dueDate, priority, projectId, taskId) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectId = projectId;
    this.id = taskId ? taskId : uuid();
  }

  getEl() {
    return task(this);
  }

  getDateString() {
    return format(this.dueDate, "yyyy-MM-dd");
  }

  static revive(t) {
    return new Task(
      t.title,
      t.description,
      new Date(t.dueDate),
      t.priority,
      t.projectId,
      t.taskId,
    );
  }
}

export default Task;
