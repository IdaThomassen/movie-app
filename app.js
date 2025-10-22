"use strict";

window.addEventListener("load", initApp);

function initApp() {
  // Vores film database
  const allMovies = [
    {
      id: 1,
      title: "The Matrix",
      year: 1999,
      genre: ["Action", "Sci-Fi"],
      director: "Lana Wachowski, Lilly Wachowski",
      rating: 8.7,
      image: "matrix.jpg",
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      description:
        "A computer programmer discovers that reality is not what it seems...",
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      genre: ["Action", "Sci-Fi", "Thriller"],
      director: "Christopher Nolan",
      rating: 8.8,
      image: "inception.jpg",
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      description:
        "A thief who enters the dreams of others to steal secrets...",
    },
  ];

  // Find vores movies-sektion
  const moviesSection = document.querySelector("#movies");

  // Opret HTML for hver film
  let movieHTML = "";

  for (const movie of allMovies) {
    movieHTML += `
            <article class="movie">
                <img src="img/${movie.image}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>Udgivet: ${movie.year}</p>
                <p>Instruktør: ${movie.director}</p>
                <p>Rating: ⭐ ${movie.rating}</p>
                <p>Genre: ${movie.genre.join(", ")}</p>
                <p>Skuespillere: ${movie.actors.join(", ")}</p>
                <p>${movie.description}</p>
            </article>
        `;
  }

  // Indsæt al HTML på én gang
  moviesSection.innerHTML = movieHTML;
}

/* er kommet til step 3 i DEL 3.1 */