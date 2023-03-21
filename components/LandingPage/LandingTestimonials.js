import TestimonialItem from "./TestimonialItem";

const DUMMY_DATA = [
  {
    id: 1,
    name: "John Smith",
    title: "PhD Student",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur nesciunt a accusantium. Sit est perferendis maiores! Tenetur, cupiditate quidem commodi illo molestiae consequatur eligendi ipsum dolorem placeat inventore error?",
  },
  {
    id: 2,
    name: "John Smith",
    title: "PhD Student",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur nesciunt a accusantium. Sit est perferendis maiores! Tenetur, cupiditate quidem commodi illo molestiae consequatur eligendi ipsum dolorem placeat inventore error?",
  },
  {
    id: 3,
    name: "John Smith",
    title: "PhD Student",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur nesciunt a accusantium. Sit est perferendis maiores! Tenetur, cupiditate quidem commodi illo molestiae consequatur eligendi ipsum dolorem placeat inventore error?",
  },
  {
    id: 4,
    name: "John Smith",
    title: "PhD Student",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur nesciunt a accusantium. Sit est perferendis maiores! Tenetur, cupiditate quidem commodi illo molestiae consequatur eligendi ipsum dolorem placeat inventore error?",
  },
  {
    id: 5,
    name: "John Smith",
    title: "PhD Student",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur nesciunt a accusantium. Sit est perferendis maiores! Tenetur, cupiditate quidem commodi illo molestiae consequatur eligendi ipsum dolorem placeat inventore error?",
  },
];

const LandingTestimonials = () => {
  return (
    <section className="bg-[#FFFCF4]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <h1 className="text-6xl pb-8">
          Dont believe us? Read some reviews from our students
        </h1>
        <div className=" sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {/*  */}
          {DUMMY_DATA.map((review) => {
            return (
              <TestimonialItem
                key={review.id}
                name={review.name}
                title={review.title}
                description={review.review}
              />
            );
          })}
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
