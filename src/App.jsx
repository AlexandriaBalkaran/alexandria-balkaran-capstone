import { useState } from 'react'
import './App.css'
import HomePage from '../pages/Homepage/Homepage';
import VenueDealsPage from '../pages/VenueDealsPage/VenueDealsPage';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/neighbourhood" element={<NeighbourhoodPage />} />  */}
        <Route path="/venue/:id/deals" element={<VenueDealsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
