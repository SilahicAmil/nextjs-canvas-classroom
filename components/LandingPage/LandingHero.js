const LandingHero = ({}) => {
  return (
    <>
      <div className="lg:h-96 md:h-64 w-screen bg-gradient-to-l from-sky-600 to-sky-400">
        <div className=" pt-24 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">
            Scholar the #1 Educational Software
          </h2>

          <h3 className="text-xl  text-gray-200 text-center">
            Connecting educators and students since 2023.
          </h3>
        </div>
        <div className="w-full invisible lg:flex lg:h-full lg:visible bg-gradient-to-l from-sky-600 to-sky-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#A2D9FF"
              fillOpacity=".8"
              d="M0,160L48,138.7C96,117,192,75,288,85.3C384,96,480,160,576,160C672,160,768,96,864,74.7C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default LandingHero;
