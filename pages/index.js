import Head from "next/head";
import LandingContent from "@/components/LandingPage/LandingContent";
import LandingHeader from "@/components/LandingPage/LandingHeader";
import LandingHero from "@/components/LandingPage/LandingHero";
import LandingPricing from "@/components/LandingPage/LandingPricing";

const HomePage = ({}) => {
  return (
    <>
      <Head>
        <title>Scholar - #1 Educator Platform </title>
      </Head>
      <div className="font-lato w-full">
        <LandingHeader />
        <LandingHero />
        <LandingContent />
        <LandingPricing />
      </div>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
