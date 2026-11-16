export class Movie {
  constructor(title, director, year, rating) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.rating = rating;
  }

  isTopRated() {
    return this.rating >= 8;
  }

  render() {
    const card = document.createElement('article');
    card.className = 'movie-card';

    if (this.isTopRated()) {
      card.classList.add('top-rated');
    }

    const badge = this.isTopRated()
      ? '<span class="star-badge">★ Masterpiece</span>'
      : '';

    card.innerHTML = `
      <div class="card-header">
        <h2>${this.title}</h2>
        ${badge}
      </div>
      <p class="director"><strong>Director:</strong> ${this.director}</p>
      <div class="card-footer">
        <span class="year">${this.year}</span>
        <span class="rating ${this.isTopRated() ? 'rating-high' : ''}">
          ${this.rating.toFixed(1)} / 10
        </span>
      </div>
    `;

    return card;
  }
}
