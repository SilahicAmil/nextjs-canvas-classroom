import Image from "next/image";

const TestimonialItem = ({ name, title, description }) => {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
        <p className="leading-relaxed text-gray-700">{description}</p>
      </blockquote>

      <div className="mt-4 flex items-center gap-4">
        <Image
          alt="Woman"
          src="/images/education-cap.jpeg"
          className="h-12 w-12 rounded-full object-cover"
          width={200}
          height={200}
        />

        <div className="text-sm">
          <p className="font-medium">{name}</p>
          <p className="mt-1">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
