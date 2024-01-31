// BookTicketForm.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const BookTicketForm = () => {
  const { id } = useParams();
  const [showName, setShowName] = useState('');

  useEffect(() => {
    // Fetch the show name based on the provided id
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowName(data.name))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookTicket = (e) => {
    e.preventDefault();

  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="display-4 mb-4">Book Ticket</h1>
          <p className="lead">Movie: <b> {showName}</b></p>
          <form onSubmit={handleBookTicket}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <Link to={`/show/${id}`} className="btn btn-secondary mt-3">
            Back to Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookTicketForm;


