import CourseDetails from "@/components/CourseDetails/CourseDetails";
import Head from "next/head";
import { MongoClient } from "mongodb";

const CourseDetailsPage = ({ courseData }) => {
  const addModuleHandler = async (enteredModuleName) => {
    const response = await fetch("/api/add-module", {
      method: "PUT",
      body: JSON.stringify(enteredModuleName),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
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

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URL);

  const db = client.db();

  const coursesCollection = db.collection("courses");

  const courses = await coursesCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: courses.map((course) => ({
      params: { courseName: course.courseName },
    })),
  };
};

export const getStaticProps = async (context) => {
  const courseName = context.params.courseName;

  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URL);

  const db = client.db();

  const coursesCollection = db.collection("courses");

  const selectedCourse = await coursesCollection.findOne({
    courseName: courseName,
  });

  client.close();

  // use supabase to list all items within the selected module
  // and pass it to ModuleItem
  // something like .from("modules").list(`${courseName}/${selectedCourse.modules}`)

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
