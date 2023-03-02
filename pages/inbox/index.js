import Head from "next/head";
import { getSession } from "next-auth/react";

const InboxPage = ({}) => {
  return (
    <>
      <Head>
        <title>Scholar - Inbox</title>
      </Head>
      <div>
        <h1>Inbox Page - COMING SOON</h1>
      </div>
    </>
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
    props: { session },
  };
};

export default InboxPage;
