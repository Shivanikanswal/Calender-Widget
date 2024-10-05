import React from "react";

function DayCell({ day, isSelected, onClick, weekends }) {
  // const [weekDay, setWeekDay] = useState(false);
  var weekDay = weekends == "0" || weekends == "6" ? "weekend" : "";

  const className = isSelected ? "day-cell selected" : `day-cell ${weekDay}`;
  return (
    <div className={className} onClick={onClick}>
      {day}
    </div>
  );
}

export default DayCell;
