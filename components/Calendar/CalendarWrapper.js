import "react-calendar/dist/Calendar.css";

import { Calendar } from "react-calendar";
import { useState } from "react";

const CalendarWrapper = () => {
  const [date, setDate] = useState(new Date());

  console.log(date);

  return (
    <>
      <div className="w-3/4 border-2 h-1/2">
        <Calendar
          onChange={setDate}
          showWeekNumbers
          value={date}
          className=" h-full items-center flex flex-col justify-center"
        />
      </div>
    </>
  );
};

export default CalendarWrapper;
