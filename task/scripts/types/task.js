export class Task {
    constructor(text, category, completed) {
        this.text = text;
        this.category = category;
        this.completed = completed;
    }

    Render(parent) {
        const card = document.createElement("div");

        const textStyle = this.completed ? 'style="text-decoration: line-through;"' : '';

        card.innerHTML = `
        <h2 ${textStyle}>${this.text}</h2>
        <p>Category: ${this.category}</p>
        <button>Complete</button>
        `;

        const titleElement = card.querySelector("h2");
        const completeBtn = card.querySelector("button");

        if (this.completed) {
            completeBtn.disabled = true;
        }

        completeBtn.addEventListener("click", () => {
            this.completed = true;
            titleElement.style.textDecoration = "line-through";
            completeBtn.disabled = true;
        });

        parent.appendChild(card);
    }
}
