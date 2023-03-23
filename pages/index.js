import Head from "next/head";
import Landing from "@/components/LandingPage/Landing";

const HomePage = ({}) => {
  return (
    <>
      <Head>
        <title>Scholar - #1 Educator Platform </title>
      </Head>
      <div className="font-lato h-[100vh] bg-[#FFFCF4]">
        <Landing />
      </div>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
