import project from "../sections/projectPanel/project";

class Project {
  constructor(name, color, icon) {
    this.name = name;
    this.color = color;
    this.icon = icon;
    this.tasks = [];
  }

  getTaskCount() {
    return this.tasks.length;
  }

  getEl() {
    return project(this);
  }
}

export default Project;
