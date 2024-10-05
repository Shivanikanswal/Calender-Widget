import React, { useState } from "react";
import Header from "./Header";
import DaysGrid from "./DaysGrid";

function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today);

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };

  return (
    <div className="calendar">
      <Header
        currentMonth={currentMonth}
        currentYear={currentYear}
        onYearChange={handleYearChange}
      />
      <DaysGrid
        currentMonth={currentMonth}
        currentYear={currentYear}
        selectedDate={selectedDate}
        onSelectDate={handleDateSelect}
        onPrevious={handlePreviousMonth}
        onNext={handleNextMonth}
      />
      {/* <p>Selected Date: {selectedDate.toDateString()}</p> */}
    </div>
  );
}

export default Calendar;
