import DashboadFooter from "@/components/Dashboard/DashboardFooter";
import Dashboard from "@/components/Dashboard/Dashboard";
import Head from "next/head";
import { MongoClient } from "mongodb";

const DashboardPage = ({ courseData }) => {
  return (
    <>
      <Head>
        <title>Scholar - Dashboard</title>
      </Head>
      <div className="w-full h-full">
        <Dashboard courseData={courseData} />
        <DashboadFooter />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URL);

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
    },
    revalidate: 3600,
  };
};

export default DashboardPage;