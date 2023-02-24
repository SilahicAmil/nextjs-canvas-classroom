import "react-calendar/dist/Calendar.css";

import { Calendar } from "react-calendar";
import { useState } from "react";

const CalendarWrapper = () => {
  const [date, setDate] = useState(new Date());

  console.log(date);

  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <Calendar onChange={setDate} showWeekNumbers value={date} />
      </div>
    </>
  );
};

export default CalendarWrapper;
