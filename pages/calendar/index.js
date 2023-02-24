import CalendarWrapper from "@/components/Calendar/CalendarWrapper";
import Head from "next/head";

const CalendarPage = ({}) => {
  return (
    <>
      <Head>
        <title>Scholar - Calendar</title>
      </Head>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1>Calendar Page</h1>

        <CalendarWrapper />
      </div>
    </>
  );
};

export default CalendarPage;
