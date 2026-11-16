export class Member {
  constructor(name, role, department, available) {
    this.name = name;
    this.role = role;
    this.department = department;
    this.available = available;
  }

  render() {
    const card = document.createElement('article');
    card.className = 'member-card';

    const statusClass = this.available ? 'status-available' : 'status-busy';
    const statusText = this.available ? 'Available' : 'Unavailable';

    card.innerHTML = `
      <div class="member-top">
        <span class="department-tag">${this.department}</span>
        <span class="status-badge ${statusClass}">${statusText}</span>
      </div>
      <h2>${this.name}</h2>
      <p class="role">${this.role}</p>
    `;

    return card;
  }
}
