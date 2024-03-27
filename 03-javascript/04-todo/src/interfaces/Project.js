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
    return this.tasks.length;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getEl() {
    return project(this);
  }
}

export default Project;
