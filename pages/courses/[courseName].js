import CourseDetails from "@/components/CourseDetails/CourseDetails";
import { MongoClient } from "mongodb";

const CourseDetailsPage = ({ courseData }) => {
  return (
    <>
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
      params: { courseName: course._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const courseName = context.params.courseName;
  console.log("course ID", courseName);

  const client = await MongoClient.connect(
    "mongodb+srv://ScholarAdmin:zwPJO9oMHGxJ4u0u@scholar-cluster.c8ih0h2.mongodb.net/?retryWrites=true&w=majority"
  );

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
