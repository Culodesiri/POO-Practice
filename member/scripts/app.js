import { Member } from './types/member.js';

class Main {
    constructor() {
        this.memberHolder = document.getElementById("member-holder");
        this.departmentSelect = document.getElementById("department-select");
        this.members = [];
    }

    async Initialize() {
        const teamFile = await fetch('./data/team.json');
        const teamData = await teamFile.json();

        teamData.forEach((memberData) => {
            const member = new Member(
                memberData.name,
                memberData.role,
                memberData.department,
                memberData.available
            );

            this.members.push(member);
        });

        const departments = [...new Set(this.members.map((member) => member.department))];
        departments.forEach((department) => {
            const option = document.createElement("option");
            option.value = department;
            option.textContent = department;
            this.departmentSelect.appendChild(option);
        });

        this.departmentSelect.addEventListener("change", () => {
            this.render();
        });

        this.render();
    }

    render() {
        this.memberHolder.innerHTML = "";
        const selectedDepartment = this.departmentSelect.value;

        const filteredMembers = selectedDepartment === "All"
            ? this.members
            : this.members.filter((member) => member.department === selectedDepartment);

        filteredMembers.forEach((member) => {
            member.Render(this.memberHolder);
        });
    }
}

const app = new Main();
app.Initialize();
