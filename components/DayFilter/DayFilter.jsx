import React from "react";
import "./DayFilter.scss";

const DayFilter = ({ availableDays, selectedDay, onDayClick }) => {
  return (
    <div className="days__container">
      {availableDays.map((day) => (
        <button
          key={day}
          onClick={() => onDayClick(day)}
          className={`day__button ${selectedDay === day ? "selected" : ""}`}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DayFilter;
