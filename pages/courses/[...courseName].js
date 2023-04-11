import Header from "@/components/UI/Header";
import { connectToDB } from "@/lib/db";
import { getSession } from "next-auth/react";

const CourseAssignmentPage = ({ courseData }) => {
  console.log(courseData.moduleName);
  return (
    <div className="m-8">
      <Header>Assignments</Header>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const courseName = context.params.courseName[0];
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
        modules: selectedCourse.modules,
      },
    },
  };
};

export default CourseAssignmentPage;
