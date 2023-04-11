import { getSession } from "next-auth/react";

const CourseAssignmentUploadPage = () => {
  return (
    <div>
      <h1 className="bg-red-500 text-4xl">WORK IN PROGRESS</h1>
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

  return {
    props: {},
  };
};

export default CourseAssignmentUploadPage;
