import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/neighbourhood" element={<NeighbourhoodPage />} /> 
        <Route path="/venue/:venueId" element={<VenueDetailsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
