import React from "react";

const DayFilter = ({ onDayChange }) => {
  const handleDayChange = (event) => {
    onDayChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="day">Select Day of the Week:</label>
      <select id="day" onChange={handleDayChange}>
        <option value="">--Select Day--</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>
  );
};

export default DayFilter;