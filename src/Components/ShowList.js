
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4">Shows</h1>
      <div className="row">
        {shows.map(show => (
          <div key={show.show.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={show.show.image?.original}
                alt={show.show.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p className="card-text">Genres: {show.show.genres.join(', ')}</p>
                <Link to={`/show/${show.show.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowsList;

