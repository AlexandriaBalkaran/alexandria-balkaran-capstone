import React from "react";
import "./NeighbourhoodFilter.scss";

const NeighbourhoodFilter = ({ neighbourhoods, selectedNeighbourhoods, onNeighbourhoodClick, toggleNeighbourhoods, showNeighbourhoods }) => {
  return (
    <div className="neighbourhood-filter">
      <button className="neighbourhood-filter__toggle" onClick={toggleNeighbourhoods}>
        All Neighbourhoods
      </button>
      {showNeighbourhoods && (
        <div className="neighbourhood-filter__buttons">
          {neighbourhoods.map((neighbourhood) => (
            <button
              key={neighbourhood}
              className={`neighbourhood-filter__button ${
                selectedNeighbourhoods.includes(neighbourhood) ? "selected" : ""
              }`}
              onClick={() => onNeighbourhoodClick(neighbourhood)}
            >
              {neighbourhood}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NeighbourhoodFilter;