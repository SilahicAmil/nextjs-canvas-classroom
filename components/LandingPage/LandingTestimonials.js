import { TESTIMONIAL_DATA } from "@/data/testimonial-data";
import TestimonialItem from "./TestimonialItem";

const LandingTestimonials = () => {
  return (
    <section className="bg-[#FFFCF4]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <h1 className="text-6xl pb-8">
          Dont believe us? Read some reviews from our students
        </h1>
        <div className=" sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {TESTIMONIAL_DATA.map((review) => {
            return (
              <TestimonialItem
                key={review.id}
                name={review.name}
                title={review.title}
                description={review.review}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
