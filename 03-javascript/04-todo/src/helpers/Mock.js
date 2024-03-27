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

  getTasks() {
    const tasks = [];
    const task = new Task(
      "SAMPLE TITLE",
      "SAMPLE DESCRIPTION",
      new Date().toLocaleDateString(),
      1,
    );

    for (let i = 0; i < 5; i++) {
      tasks.push(task);
    }
    return tasks;
  }

  getProjects() {
    const projects = [];
    for (let i = 0; i < 5; i++) {
      const project = new Project(
        `SAMPLE PROJECT - #0${i + 1}`,
        "#6BCC43",
        "",
        this.getTasks(),
      );
      projects.push(project);
    }
    return projects;
  }
}

const mock = Object.freeze(new Mock());
export default mock;
