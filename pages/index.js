import LandingContent from "@/components/LandingPage/LandingContent";
import LandingHeader from "@/components/LandingPage/LandingHeader";
import LandingHero from "@/components/LandingPage/LandingHero";
import LandingTestimonials from "@/components/LandingPage/LandingTestimonials";

const HomePage = ({}) => {
  return (
    <>
      <>
        <LandingHeader />
        <LandingHero />
        <LandingContent />
        <LandingTestimonials />
      </>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
