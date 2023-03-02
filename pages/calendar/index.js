import CalendarWrapper from "@/components/Calendar/CalendarWrapper";
import Head from "next/head";
import { getSession } from "next-auth/react";

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

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default CalendarPage;
