import { useRef } from "react";
import { useRouter } from "next/router";

const CoursesModalContent = ({ children, onAddCourse }) => {
  const router = useRouter();
  const courseNameRef = useRef();
  const tagRef = useRef();
  const descriptionRef = useRef();

  const createCourseSubmitHandler = (e) => {
    e.preventDefault();

    const courseNameRefValue = courseNameRef.current.value;
    const tagRefValue = tagRef.current.value;
    const descriptionRefValue = descriptionRef.current.value;

    const courseData = {
      courseName: courseNameRefValue,
      tag: tagRefValue,
      description: descriptionRefValue,
      published: true,
      term: "2023-2024",
    };

    e.target.reset();

    onAddCourse(courseData);
    router.push(`/courses/${courseNameRefValue}`);
  };

  return (
    <>
      <div className="h-full w-full flex flex-col font-lato bg-[#FAF9F6]">
        <div className="flex justify-center items-center h-12 w-full bg-[#424B54] border-b border-black">
          <div className="flex mr-auto w-6 ml-1 p-1 bg-red-500 items-center justify-center rounded-full h-6">
            {children}
          </div>
          <h1 className="text-2xl text-white w-full items-center justify-center flex font-semibold tracking-wide">
            Course Creation
          </h1>
        </div>

        <form
          onSubmit={createCourseSubmitHandler}
          className="flex flex-col items-center h-full w-full  justify-center"
        >
          <div className="w-full flex flex-col items-center form-control">
            <label htmlFor="name" className="text-xl tracking-wide">
              Course Name
            </label>
            <input
              type="text"
              id="name"
              required
              ref={courseNameRef}
              className="w-1/3 bg-black text-white text-lg rounded-md"
            />
          </div>
          <div className="w-full flex flex-col h-16 items-center text-lg appearance-none">
            <label htmlFor="tag">Course Tag</label>
            <select
              id="tag"
              required
              ref={tagRef}
              className="w-1/3 bg-black text-white  rounded-md"
            >
              <option value="null">Select From Dropdown</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>
          <div className="w-full flex flex-col items-center">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              cols="30"
              rows="5"
              required
              ref={descriptionRef}
              className="w-1/3 bg-black text-white  text-lg rounded-md"
            />
          </div>
          <div className="mt-4 flex items-center justify-center w-24  ">
            <button
              type="submit"
              className="w-full h-full p-3 bg-sky-500 rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CoursesModalContent;
