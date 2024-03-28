import task from "../sections/taskView/task";
import { v4 as uuid } from "uuid";
const { format } = require("date-fns");

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
}

export default Task;
