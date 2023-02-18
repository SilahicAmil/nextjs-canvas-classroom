import Image from "next/image";

const LandingContent = ({}) => {
  return (
    <>
      <section className="container mx-auto px-6 p-10 z-50">
        <h2 className="text-3xl tracking-wide font-bold text-center text-gray-800 mb-12">
          WHO WE HELP
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Higher Ed</h4>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, magnam! Vitae praesentium molestiae nostrum voluptatum
              pariatur error incidunt recusandae, dolore quasi. Eaque
              exercitationem amet ad? Mollitia, commodi. Unde, earum suscipit?
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
              width={500}
              height={1000}
              className="w-full rounded-md mr-8 h-1/2 flex  items-center justify-center"
            />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Independent Ed
            </h4>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum id
              dicta deleniti, pariatur tenetur minus velit perferendis ratione
              nemo perspiciatis qui harum. Tempora voluptatibus ullam ipsum vel
              officia facilis doloribus?
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Corp Ed</h4>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id
              assumenda optio laborum esse iste, harum exercitationem quaerat
              facilis repellat deserunt quo? Ex ab, non illo dicta voluptas enim
              quos.
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
