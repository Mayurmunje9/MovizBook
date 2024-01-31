import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.error("Error fetching show details:", error));
  }, [id]);

  const handleBookTicket = () => {};

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="display-4 mb-4">{show.name}</h1>
          {show.image && (
            <img
              src={show.image.original}
              alt={show.name}
              className="img-fluid mb-4"
            />
          )}
          <p className="lead">
            Genres: {show.genres && show.genres.join(", ")}
          </p>
          <div className="mb-4">
            <h5 className="font-weight-bold">Summary</h5>
            <p
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
          </div>
          <Link to={`/show/${id}/book`} className="btn btn-primary">
            Book Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
