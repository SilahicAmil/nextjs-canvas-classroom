import Header from "@/components/UI/Header";
import { getSession } from "next-auth/react";
import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const CourseAssignmentPage = ({}) => {
  const router = useRouter();
  const [assignmentData, setAssignmentData] = useState([]);
  const courseName = router.query.courseName[0];
  const moduleName = router.query.modules;

  useEffect(() => {
    // fetch data from supabase
    // might need to check if moduleName is in supabase return that one
    // else return null for that module
    const fetchAssignmentData = async () => {
      const { data, error } = await supabase.storage
        .from("assignments")
        .list(`test@test.com/${courseName}/${moduleName[1]}`, {
          limit: 100,
          offset: 0,
        });

      setAssignmentData(data);
    };
    fetchAssignmentData();
  }, [courseName, moduleName]);

  return (
    <div className="m-8">
      <h1 className="bg-red-500 text-4xl">WORK IN PROGRESS</h1>
      <Header>Assignments</Header>
      {assignmentData.map((item) => {
        return <h1 key={item.name}>{item.name}</h1>;
      })}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  // might be easier to just fetch the data here and handle it
  return {
    props: {},
  };
};

export default CourseAssignmentPage;
