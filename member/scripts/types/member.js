export class Member {
    constructor(name, role, department, available) {
        this.name = name;
        this.role = role;
        this.department = department;
        this.available = available;
    }

    Render(parent) {
        const card = document.createElement("div");

        card.innerHTML = `
        <h2>${this.name}</h2>
        <p>Role: ${this.role}</p>
        <p>Department: ${this.department}</p>
        <p>Availability: ${this.available ? "Available" : "Unavailable"}</p>
        `;

        parent.appendChild(card);
    }
}
