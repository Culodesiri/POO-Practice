import { Movie } from './types/movie.js';

class Main {
  constructor() {
    this.movies = [];
    this.container = document.getElementById('movies-container');
  }

  async init() {
    try {
      const response = await fetch('./data/movies.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.movies = data.map(
        (item) => new Movie(item.title, item.director, item.year, item.rating)
      );
      this.render();
    } catch (error) {
      console.error('Error loading movies:', error);
    }
  }

  render() {
    this.container.innerHTML = '';
    this.movies.forEach((movie) => {
      const cardElement = movie.render();
      this.container.appendChild(cardElement);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Main();
  app.init();
});
