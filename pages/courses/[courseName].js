import CourseDetails from "@/components/CourseDetails/CourseDetails";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { useState } from "react";

const addNewModuleHandler = async (enteredModuleName) => {
  const result = await fetch("/api/add-module", {
    method: "PUT",
    body: JSON.stringify(enteredModuleName),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await result.json();
  console.log(data);
};

const downloadFileHandler = async () => {
  const result = await fetch("/api/fetch-file", {
    method: "GET",
  });

  const data = await result.json();

  console.log(data);
  setFileData(data);
};

const CourseDetailsPage = ({ courseData }) => {
  const [fileData, setFileData] = useState();
  return (
    <>
      <Head>
        <title>Scholar - Course: {courseData.name}</title>
      </Head>
      <div className="h-full w-full">
        <CourseDetails
          courseData={courseData}
          onAddModule={addNewModuleHandler}
        />
      </div>
      <button onClick={downloadFileHandler}>
        <a href={fileData} download>
          Download
        </a>
      </button>
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
