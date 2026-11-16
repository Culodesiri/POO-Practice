export class Movie {
    constructor(title, director, year, rating) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
    }

    Render(parent) {
        const card = document.createElement("div");

        const isTopRated = this.rating >= 8;
        const badge = isTopRated ? " ★" : "";

        if (isTopRated) {
            card.style.border = "2px solid gold";
            card.style.padding = "10px";
            card.style.marginBottom = "10px";
        } else {
            card.style.border = "1px solid #ccc";
            card.style.padding = "10px";
            card.style.marginBottom = "10px";
        }

        card.innerHTML = `
        <h2>${this.title}${badge}</h2>
        <p>Director: ${this.director}</p>
        <p>Year: ${this.year}</p>
        <p>Rating: ${this.rating} / 10</p>
        `;

        parent.appendChild(card);
    }
}
