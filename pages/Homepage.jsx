import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import NeighbourhoodFilter from "../components/NeighbourhoodFilter/NeighbourhoodFilter";


function HomePage() {
  return (
  <>
  <h1>Pour Decisions</h1>
  <NeighbourhoodFilter/>
  </>
  );
}

export default HomePage;