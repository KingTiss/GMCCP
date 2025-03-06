import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  
  const movies = [
    { id: 1, title: 'The Killer de John Woo', description: 'Film d action', trailer: 'https://www.youtube.com/watch?v=kXWs2WNOYk4' },
    { id: 2, title: 'Vol à haut risque', description: 'Film d action', trailer: 'https://www.youtube.com/watch?v=GUtUn2rL3Nw' },
    { id: 3, title: 'Rebel Ridge', description: 'Film d action' , trailer:'https://www.youtube.com/watch?v=gF3gZicntIw'}
  ];

  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <iframe
            title="Trailer"
            width="560"
            height="315"
            src={movie.trailer}
            allowFullScreen
          ></iframe>
          <br />
          <Link to="/">Retour </Link>
        </div>
      ) : (
        <p>Film non trouvé</p>
      )}
    </div>
  );
}

export default MovieDetail;