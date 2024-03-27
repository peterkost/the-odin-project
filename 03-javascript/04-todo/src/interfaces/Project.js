import project from "../sections/projectPanel/project";
import { v4 as uuid } from "uuid";

class Project {
  constructor(name, color, icon, tasks) {
    this.name = name;
    this.color = color;
    this.icon = icon;
    this.tasks = tasks;
    this.id = uuid();
  }

  getTaskCount() {
    return this.tasks.size;
  }

  getTasks() {
    return this.tasks.values();
  }

  addTask(task) {
    this.tasks.set(task.id, task);
  }

  removeTask(taskId) {
    this.tasks.delete(taskId);
  }

  getEl() {
    return project(this);
  }
}

export default Project;
