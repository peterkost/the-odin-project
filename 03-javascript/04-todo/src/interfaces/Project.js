import project from "../sections/projectPanel/project";
import Task from "./Task";

class Project {
  constructor(name, color, icon, tasks, projectId) {
    this.name = name;
    this.color = color;
    this.icon = icon;
    this.tasks = tasks;
    this.id = projectId;
  }

  getTaskCount() {
    return this.tasks.size;
  }

  getTasks() {
    return this.tasks.values();
  }

  getTask(id) {
    return this.tasks.get(id);
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

  toJSON() {
    return {
      ...this,
      tasks: Array.from(this.tasks.entries()),
    };
  }

  static revive(p) {
    const taskArray = p.tasks.map(([id, task]) => [id, Task.revive(task)]);
    return new Project(p.name, p.color, p.icon, new Map(taskArray), p.id);
  }
}

export default Project;
