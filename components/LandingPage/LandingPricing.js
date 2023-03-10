import PricingCard from "./PricingCard";

const PRICING_DATA = [
  {
    id: 1,
    name: "Independent Educator",
    pricing: "Free",
    features: [
      "24/7 Customer Service Support",
      "Create up to 5 courses",
      "Real-Time Messaging with Students",
    ],
  },
  {
    id: 2,
    name: "Corporate",
    pricing: 54.99 + "/Month",
    features: [
      "24/7 Dedicated Success Manager",
      "Unlimted number of courses",
      "Real-Time Messaging with Students",
      "Real Time Student Analytics",
      "Unique Login Portal",
    ],
  },
  {
    id: 3,
    name: "Educator",
    pricing: 25.99 + "/Month",
    features: [
      "24/7 Private Email Support",
      "Create up to 15 courses",
      "Real-Time Messaging with Students",
      "Real Time Student Analytics",
    ],
  },
];

const LandingPricing = ({}) => {
  return (
    <>
      <div className="flex h-full  w-screen rotate-180" id="pricing">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#A2D9FF"
            fillOpacity=".8"
            d="M0,160L48,138.7C96,117,192,75,288,85.3C384,96,480,160,576,160C672,160,768,96,864,74.7C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section className="mb-32 text-gray-800 w-full ">
        <h2 className="text-4xl tracking-wide font-bold text-center mb-12">
          Pricing
        </h2>

        <div className="grid lg:grid-cols-3  gap-6 lg:gap-x-12">
          {PRICING_DATA.map((card) => {
            return <PricingCard key={card.id} {...card} />;
          })}
        </div>
      </section>
    </>
  );
};

export default LandingPricing;
