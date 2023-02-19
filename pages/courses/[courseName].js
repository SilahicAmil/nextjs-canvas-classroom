import CourseDetails from "@/components/CourseDetails/CourseDetails";
import Head from "next/head";
import { MongoClient } from "mongodb";

const CourseDetailsPage = ({ courseData }) => {
  return (
    <>
      <Head>
        <title>Scholar - Course - {courseData.name}</title>
      </Head>
      <div className="h-full w-full">
        <CourseDetails courseData={courseData} />
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
    fallback: "blocking",
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
      },
    },
  };
};

export default CourseDetailsPage;
