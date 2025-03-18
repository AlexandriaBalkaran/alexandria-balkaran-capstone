import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import NeighbourhoodFilter from "../components/NeighbourhoodFilter/NeighbourhoodFilter";
import VenueCard from "../components/VenueCard/VenueCard";


function HomePage() {
  return (
  <>
  <h1>Pour Decisions</h1>
  <NeighbourhoodFilter/>
  {/* <VenueCard venue={}/> */}
  </>
  );
}

export default HomePage;