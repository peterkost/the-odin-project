import Task from "../interfaces/Task";
import Project from "../interfaces/Project";

let instance;
class Mock {
  constructor() {
    if (instance) {
      throw new Error("Mock already exists, you can not initalize multiple!");
    }
    instance = this;
  }

  getTasks(projectId) {
    const tasks = [];

    for (let i = 0; i < 5; i++) {
      const task = new Task(
        `SAMPLE TITLE - ${i + 1}`,
        `${projectId} - ${i + 1}`,
        new Date().toLocaleDateString(),
        1,
        projectId,
      );
      tasks.push(task);
    }
    return tasks;
  }

  getProjects() {
    const projects = new Map();
    for (let i = 0; i < 5; i++) {
      const project = new Project(
        `SAMPLE PROJECT - #0${i + 1}`,
        `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        "",
        new Map(),
      );
      const tasks = this.getTasks(project.id);
      tasks.forEach((task) => project.addTask(task));
      projects.set(project.id, project);
    }
    return projects;
  }
}

const mock = Object.freeze(new Mock());
export default mock;
