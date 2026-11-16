export class Task {
  constructor(text, category, completed = false) {
    this.text = text;
    this.category = category;
    this.completed = completed;
  }

  complete() {
    this.completed = true;
  }

  render() {
    const item = document.createElement('div');
    item.className = 'task-item';

    if (this.completed) {
      item.classList.add('completed');
    }

    const infoWrapper = document.createElement('div');
    infoWrapper.className = 'task-info';

    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'task-category';
    categoryBadge.textContent = this.category;

    const taskText = document.createElement('p');
    taskText.className = 'task-text';
    taskText.textContent = this.text;

    infoWrapper.appendChild(categoryBadge);
    infoWrapper.appendChild(taskText);

    const completeButton = document.createElement('button');
    completeButton.className = 'complete-btn';
    completeButton.textContent = this.completed ? 'Completed' : 'Complete';
    completeButton.disabled = this.completed;

    completeButton.addEventListener('click', () => {
      this.complete();
      item.classList.add('completed');
      completeButton.textContent = 'Completed';
      completeButton.disabled = true;
    });

    item.appendChild(infoWrapper);
    item.appendChild(completeButton);

    return item;
  }
}
