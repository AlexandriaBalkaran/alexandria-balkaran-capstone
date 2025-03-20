import { useState } from 'react'
import HomePage from '../pages/Homepage/Homepage';
import VenueDealsPage from '../pages/VenueDealsPage/VenueDealsPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LocationPage from '../pages/LocationPage/LocationPage';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} /> 
        <Route path="/venue/:id/deals" element={<VenueDealsPage />}/>
        <Route path="/favourites" element={<FavouritesPage />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
