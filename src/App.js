// App.js
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ShowSummary from "./Components/Summary.js";
import ShowsList from "./Components/ShowList";
import ShowDetails from "./Components/ShowDetails";
import BookTicketForm from "./Components/BookTicketForm.js";
window.React = require("react");

// Add this in your component file
require("react-dom");
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ShowsList />
            </div>
          }
        />
        <Route
          path="/show/:id"
          element={
            <div>
              <ShowDetails />
            </div>
          }
        />
        {/* <Route
          path="/show/:id/summary"
          element={
            <div>
              <ShowSummary />
            </div>
          }
        /> */}
          <Route
     path="/show/:id/book"
          element={
            <div>
              <BookTicketForm />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
