import { useState } from 'react'
import './App.css'
import HomePage from '../pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/neighbourhood" element={<NeighbourhoodPage />} />  */}
        {/* <Route path="/venue/:id/deals" element={<VenueDetailsPage />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
