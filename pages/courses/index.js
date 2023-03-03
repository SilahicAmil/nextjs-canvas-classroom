import Courses from "@/components/CoursesPage/Courses";
import Head from "next/head";
import { connectToDB } from "@/lib/db";
import { getSession } from "next-auth/react";

const CoursesPage = ({ courseData }) => {
  const addNewCourseHandler = async (enteredCourseData) => {
    const response = await fetch("/api/create-course", {
      method: "POST",
      body: JSON.stringify(enteredCourseData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Scholar - Courses</title>
      </Head>
      <div className="w-full h-full">
        <Courses onAddCourse={addNewCourseHandler} courseData={courseData} />
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
  const client = await connectToDB();

  const db = client.db();

  const coursesCollection = db.collection("courses");

  const courses = await coursesCollection.find().toArray();

  client.close();

  return {
    props: {
      courseData: courses.map((course) => ({
        courseName: course.courseName,
        term: course.term,
        courseId: course._id.toString(),
      })),
      data: { session },
    },
  };
};

export default CoursesPage;
