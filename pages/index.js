import LandingContent from "@/components/LandingPage/LandingContent";
import LandingHeader from "@/components/LandingPage/LandingHeader";
import LandingHero from "@/components/LandingPage/LandingHero";
import LandingPricing from "@/components/LandingPage/LandingPricing";

const HomePage = ({}) => {
  return (
    <>
      <div className="font-lato">
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
