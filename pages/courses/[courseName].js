import CourseDetails from "@/components/CourseDetails/CourseDetails";
import Head from "next/head";
import { connectToDB } from "@/lib/db";
import { getSession } from "next-auth/react";

const CourseDetailsPage = ({ courseData }) => {
  const addModuleHandler = async (enteredModuleName) => {
    const response = await fetch("/api/add-module", {
      method: "PUT",
      body: JSON.stringify(enteredModuleName),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const data = await response.json();
  };

  return (
    <>
      <Head>
        <title>Scholar - Course: {courseData.name}</title>
      </Head>

      <div className="h-full w-full">
        <CourseDetails courseData={courseData} onAddModule={addModuleHandler} />
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const courseName = context.params.courseName;

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

  const selectedCourse = await coursesCollection.findOne({
    courseName: courseName,
  });

  client.close();

  return {
    props: {
      courseData: {
        courseId: selectedCourse._id.toString(),
        name: selectedCourse.courseName,
        description: selectedCourse.description,
        term: selectedCourse.term,
        modules: selectedCourse.modules,
      },
    },
  };
};

export default CourseDetailsPage;
