import Dashboard from "@/components/Dashboard/Dashboard";
import Head from "next/head";
import { connectToDB } from "@/lib/db";
import { getSession } from "next-auth/react";

const DashboardPage = ({ courseData }) => {
  return (
    <>
      <Head>
        <title>Scholar - Dashboard</title>
      </Head>
      <div className="w-full h-full">
        <Dashboard courseData={courseData} />
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
      },
    };
  }

  const client = await connectToDB();

  const db = client.db();

  const coursesCollection = db.collection("courses");

  const courses = await coursesCollection.find().toArray();

  client.close();

  return {
    props: {
      courseData: courses.map((course) => ({
        courseName: course.courseName,
        description: course.description,
        tag: course.tag,
        term: course.term,
        courseId: course._id.toString(),
      })),
      sessionInfo: session,
    },
  };
};

export default DashboardPage;
