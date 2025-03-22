import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import VenueDealsPage from '../pages/VenueDealsPage/VenueDealsPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NeighbourhoodPage from '../pages/NeighbourhoodPage/NeighbourhoodPage';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import MapsPage from "../pages/MapsPage/MapsPage";
import ScrollTop from "../components/ScrollTop/ScrollTop";


function App() {
  return (
    <Router>
      <ScrollTop />
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/neighbourhood" element={<NeighbourhoodPage />} />
        <Route path="/maps" element={<MapsPage />}/> 
        <Route path="/venue/:id/deals" element={<VenueDealsPage />}/>
        <Route path="/favourites" element={<FavouritesPage />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
