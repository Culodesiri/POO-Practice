import { Task } from './types/task.js';

class Main {
  constructor() {
    this.tasks = [];
    this.container = document.getElementById('tasks-container');
  }

  async init() {
    try {
      const response = await fetch('./data/tasks.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.tasks = data.map(
        (item) => new Task(item.text, item.category, item.completed)
      );
      this.render();
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  }

  render() {
    this.container.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskElement = task.render();
      this.container.appendChild(taskElement);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Main();
  app.init();
});
