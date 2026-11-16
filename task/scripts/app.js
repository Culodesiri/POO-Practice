import { Task } from './types/task.js';

class Main {
    constructor() {
        this.taskHolder = document.getElementById("task-holder");
        this.tasks = [];
    }

    async Initialize() {
        const tasksFile = await fetch('./data/tasks.json');
        const tasksData = await tasksFile.json();

        tasksData.forEach((taskData) => {
            const task = new Task(
                taskData.text,
                taskData.category,
                taskData.completed
            );

            this.tasks.push(task);
        });

        this.tasks.forEach((task) => {
            task.Render(this.taskHolder);
        });
    }
}

const app = new Main();
app.Initialize();
