import Courses from "@/components/CoursesPage/Courses";
import Head from "next/head";
import { MongoClient } from "mongodb";

const CoursesPage = ({ course }) => {
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
        <Courses onAddCourse={addNewCourseHandler} courseData={course} />
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
      course: courses.map((course) => ({
        courseName: course.courseName,
        term: course.term,
        id: course._id.toString(),
      })),
    },
    revalidate: 3600,
  };
};

export default CoursesPage;
