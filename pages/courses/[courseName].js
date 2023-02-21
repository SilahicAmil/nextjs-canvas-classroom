import CourseDetails from "@/components/CourseDetails/CourseDetails";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

const CourseDetailsPage = ({ courseData }) => {
  const [fileData, setFileData] = useState([]);
  console.log(fileData);

  const listFiles = async () => {
    const { data, error } = await supabase.storage
      .from("modules")
      .list(`${courseData.name}/Module-10`, {});

    console.log(data);
    setFileData(data);
  };

  return (
    <>
      <Head>
        <title>Scholar - Course: {courseData.name}</title>
      </Head>
      <div className="h-full w-full">
        <CourseDetails courseData={courseData} />
      </div>
      <button onClick={listFiles}>Get List</button>
      {fileData.map((item, idx) => {
        return <p key={idx}>{item.name}</p>;
      })}
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
