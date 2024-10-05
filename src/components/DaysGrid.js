import React from "react";
import DayCell from "./DayCell";

function DaysGrid({
  currentMonth,
  currentYear,
  selectedDate,
  onSelectDate,
  onPrevious,
  onNext,
}) {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const days = [];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Padding for the days before the first of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<DayCell key={`empty-${i}`} />);
  }

  // Generate days for the current month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const weekDay = new Date(currentYear, currentMonth, day).getDay();
    // console.log(weekDay);
    days.push(
      <DayCell
        key={day}
        day={day}
        isSelected={date.toDateString() === selectedDate.toDateString()}
        onClick={() => onSelectDate(date)}
        weekends={weekDay}
      />
    );
  }

  return (
    <>
      <div className="week-days">
        {weekDays.map((val) => {
          return <span>{val}</span>;
        })}
      </div>
      <div className="days-grid">{days}</div>
      <div className="button-actions">
        <button className="prev-btn" onClick={onPrevious}>
          Previous
        </button>
        <button className="next-btn" onClick={onNext}>
          Next
        </button>
      </div>
      <p className="selected-date-display">
        Selected Date: {selectedDate.toDateString()}
      </p>
    </>
  );
}

export default DaysGrid;
