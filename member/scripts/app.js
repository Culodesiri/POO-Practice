import { Member } from './types/member.js';

class Main {
  constructor() {
    this.members = [];
    this.container = document.getElementById('team-container');
    this.departmentFilter = document.getElementById('department-filter');
  }

  async init() {
    try {
      const response = await fetch('./data/team.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.members = data.map(
        (item) => new Member(item.name, item.role, item.department, item.available)
      );

      this.populateDepartmentOptions();
      this.setupEventListeners();
      this.render();
    } catch (error) {
      console.error('Error loading team members:', error);
    }
  }

  populateDepartmentOptions() {
    const departments = [...new Set(this.members.map((member) => member.department))];
    departments.forEach((department) => {
      const option = document.createElement('option');
      option.value = department;
      option.textContent = department;
      this.departmentFilter.appendChild(option);
    });
  }

  setupEventListeners() {
    this.departmentFilter.addEventListener('change', () => {
      this.render();
    });
  }

  render() {
    const selectedDepartment = this.departmentFilter.value;
    const filteredMembers =
      selectedDepartment === 'all'
        ? this.members
        : this.members.filter((member) => member.department === selectedDepartment);

    this.container.innerHTML = '';
    filteredMembers.forEach((member) => {
      const cardElement = member.render();
      this.container.appendChild(cardElement);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Main();
  app.init();
});
