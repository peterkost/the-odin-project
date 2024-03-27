import project from "../sections/projectPanel/project";

class Project {
  constructor(name, color, icon, tasks) {
    this.name = name;
    this.color = color;
    this.icon = icon;
    this.tasks = tasks;
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
