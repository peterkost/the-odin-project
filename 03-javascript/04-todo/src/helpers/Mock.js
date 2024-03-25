import Task from "../interfaces/Task";

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
      "Program",
      "Work on The Odin Project for 4 hours",
      new Date().toLocaleDateString(),
      1,
    );
    for (let i = 0; i < 5; i++) {
      tasks.push(task);
    }
    return tasks;
  }
}

const mock = Object.freeze(new Mock());
export default mock;
