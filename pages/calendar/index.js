import CalendarWrapper from "@/components/Calendar/CalendarWrapper";
import Head from "next/head";

const CalendarPage = ({}) => {
  return (
    <>
      <Head>
        <title>Scholar - Calendar</title>
      </Head>
      <div className="w-screen h-screen justify-center items-center">
        <h1 className="text-4xl">Calendar Page - WORK IN PROGRESS</h1>

        <CalendarWrapper />
      </div>
    </>
  );
};

export default CalendarPage;
