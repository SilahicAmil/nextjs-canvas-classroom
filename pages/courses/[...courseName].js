import Header from "@/components/UI/Header";
import { connectToDB } from "@/lib/db";
import { getSession } from "next-auth/react";
import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";
import { useState } from "react";

const CourseAssignmentPage = ({ courseData }) => {
  const [assignmentData, setAssignmentData] = useState([]);

  console.log(courseData.name);
  console.log(courseData.modules);

  useEffect(() => {
    // fetch data from supabase
    // might need to check if moduleName is in supabase return that one
    // else return null for that module
    const fetchAssignmentData = async () => {
      const { data, error } = await supabase.storage
        .from("assignments")
        .list(`test@test.com/${courseData.name[0]}/${courseData.modules}`);

      console.log("data", data);
      setAssignmentData(data);
    };
    fetchAssignmentData();
  }, [courseData]);

  return (
    <div className="m-8">
      <Header>Assignments</Header>
      {assignmentData.map((item) => {
        return <h1 key={item.id}>{item.name}</h1>;
      })}
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

  // might  need to fetch all email from DB to eventually use for supabase fetching

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
