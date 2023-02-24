import Image from "next/image";

const LandingContent = ({}) => {
  return (
    <>
      <section
        className="container w-screen mx-auto px-6 p-10 z-50"
        id="who-we-help"
      >
        <h2 className="text-3xl tracking-wide font-bold text-center text-gray-800 mb-12">
          WHO WE HELP
        </h2>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Higher Ed</h4>
            <p className="text-gray-600 mb-8 ">
              Our solutions make educators more effective and students more
              successful, both in school and beyond. Your students want
              consistent standards across courses—and to know their school is
              prepared for anything. Whether you’re all together in person or
              all over the place, our platform keeps everyone connected,
              learning, and communicating with consistency.
            </p>
          </div>
          <div className="w-full  md:w-1/2">
            <Image
              src="/images/education-cap.jpeg"
              alt="Education"
              width={500}
              height={1000}
              className="w-full rounded-md ml-8 h-1/2 flex  items-center justify-center"
            />
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full  md:w-1/2">
            <Image
              src="/images/independ-education.jpeg"
              alt="Education"
              width={1000}
              height={1000}
              className="w-full  rounded-md mr-8 h-1/2 flex  items-center justify-center"
            />
          </div>
          <div className="w-full md:w-1/2  pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3 mt-4">
              Independent Ed
            </h4>
            <p className="text-gray-600 mb-8 ">
              Every lesson has the power to change lives. Even more so with our
              teaching and learning solutions in your corner. We’ll help you
              create a digital classroom for all aspects of Independent
              teaching, whether you’re in person, blended, or online.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Corporate Ed
            </h4>
            <p className="text-gray-600 mb-8 ">
              Scholar for Corporate Education is a set of learning and
              development tools that helps companies deliver employee training
              and engagement at any scale. With Scholar, trainers and learning
              developers can easily create courses they need to support
              employees across the entire organization.
            </p>
          </div>
          <div className="w-full  md:w-1/2">
            <Image
              src="/images/corp-education.jpeg"
              alt="Education"
              width={500}
              height={1000}
              className="w-full rounded-md ml-8 h-1/2 flex  items-center justify-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingContent;
