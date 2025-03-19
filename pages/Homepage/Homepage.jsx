import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import NeighbourhoodFilter from "../../components/NeighbourhoodFilter/NeighbourhoodFilter";
import VenueCard from "../../components/VenueCard/VenueCard";
import "./Homepage.scss";

function HomePage() {
  return (
  <>
  <NeighbourhoodFilter/>
  {/* <VenueCard venue={}/> */}
  </>
  );
}

export default HomePage;