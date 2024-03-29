import task from "../sections/taskView/task";
const { format, parse, isDate } = require("date-fns");

class Task {
  constructor(title, description, dueDate, priority, projectId, taskId) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectId = projectId;
    this.id = taskId;
  }

  getEl() {
    return task(this);
  }

  getDateString() {
    return isDate(this.dueDate) ? format(this.dueDate, "yyyy-MM-dd") : "";
  }

  static revive(t) {
    return new Task(
      t.title,
      t.description,
      t.dueDate ? parse(values.dueDate, "yyyy-MM-dd", new Date()) : undefined,
      t.priority,
      t.projectId,
      t.id,
    );
  }
}

export default Task;
