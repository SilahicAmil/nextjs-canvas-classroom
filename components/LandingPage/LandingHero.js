import Image from "next/image";
import Link from "next/link";

const LandingHero = ({}) => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8  ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="Corp Education"
                src="/images/corp-education.jpeg"
                className="absolute inset-0 h-full w-full object-cover"
                width={400}
                height={400}
              />
            </div>

            <div className="lg:py-24 ">
              <h1 className="text-6xl font-bold sm:text-4xl">
                Learn without limits and spread knowledge.
              </h1>

              <p className="mt-4 text-[#5F5B53] w-auto text-md">
                Build new skills for that “this is my year” feeling with
                courses, certificates, and degrees from world-class universities
                and companies.
              </p>

              <Link
                href="/login"
                className="mt-8 inline-block  bg-[#FFB900] rounded-sm px-12 py-3 font-medium text-lg text-white  hover:rounded-xl hover:duration-200"
              >
                Get Started Today
              </Link>
              <h1 className="py-6 text-lg text-[#5F5B53]">Recent Engagement</h1>
              <div className="flex gap-8">
                <div className="flex gap-2 items-center">
                  <p className="text-3xl">50K </p>
                  <span className="text-md text-[#5F5B53]">Students</span>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-3xl ">25+ </p>
                  <span className="text-[#5F5B53] text-md">Courses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingHero;
