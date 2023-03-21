import Head from "next/head";
import LandingFooter from "@/components/LandingPage/LandingFooter";
import LandingHeader from "@/components/LandingPage/LandingHeader";
import LandingHero from "@/components/LandingPage/LandingHero";
import LandingTestimonials from "@/components/LandingPage/LandingTestimonials";

const HomePage = ({}) => {
  return (
    <>
      <Head>
        <title>Scholar - #1 Educator Platform </title>
      </Head>
      <div className="font-lato h-[100vh] bg-[#FFFCF4]">
        <LandingHeader />
        <LandingHero />
        <LandingTestimonials />
        <LandingFooter />
      </div>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
