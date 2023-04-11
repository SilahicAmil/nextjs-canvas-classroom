import Header from "@/components/UI/Header";
import { connectToDB } from "@/lib/db";
import { getSession } from "next-auth/react";
import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";

const CourseAssignmentPage = ({ courseData }) => {
  const { data: session } = useSession();
  const [assignmentData, setAssignmentData] = useState([]);

  console.log("session", session?.user.email);
  console.log(courseData.modules);

  useEffect(() => {
    // fetch data from supabase
    const fetchAssignmentData = async () => {
      const { data, error } = await supabase.storage
        .from("assignments")
        .list(`assignments`);

      console.log(data);
      setAssignmentData(data);
    };
    fetchAssignmentData();
  }, [courseData, session]);

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
