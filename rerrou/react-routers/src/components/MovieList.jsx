import React from 'react';
import { Link } from 'react-router-dom';

function MovieList() {
  const movies = [
    { id: 1, title: 'The Killer de John Woo', description: 'Film fort bezaf' },
    { id: 2, title: 'Vol à haut risque', description: 'Film bezaf chbab' },
    { id: 3, title: 'Rebel Ridge', description: 'Film 9owaaa' },
  ];

  return (
    <div>
      <h1>Les Films</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <Link to={`/movie/${movie.id}`}>Voir plus</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;