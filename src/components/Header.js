import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Header({ currentMonth, currentYear, onYearChange }) {
  const handleYearChange = (e) => {
    onYearChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="header">
      <span>{months[currentMonth]}</span>

      <select value={currentYear} onChange={handleYearChange}>
        {Array.from({ length: 35 }, (_, i) => 1999 + i).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Header;
