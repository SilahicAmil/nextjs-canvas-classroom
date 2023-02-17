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
      <div className="h-full w-full flex flex-col font-lato">
        <div className="flex justify-center items-center h-12 w-full">
          <div className="flex mr-auto w-8 ml-1 p-1 bg-red-500 items-center justify-center rounded-full h-1/2">
            {children}
          </div>
          <h1 className="text-2xl w-full items-center justify-center flex font-semibold">
            Course Creation
          </h1>
        </div>

        <form
          onSubmit={createCourseSubmitHandler}
          className="flex flex-col items-center w-full h-full bg-slate-400 justify-center"
        >
          <div className="w-full flex flex-col items-center form-control">
            <label htmlFor="name" className="">
              Course Name
            </label>
            <input
              type="text"
              id="name"
              required
              ref={courseNameRef}
              className=""
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <label htmlFor="tag">Course Tag</label>
            <select id="tag" required ref={tagRef}>
              <option value="null">Select From Dropdown</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="English">Computer Science</option>
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
            />
          </div>
          <div className="w-1/3 flex flex-col ">
            <button type="submit" className="p-2 bg-sky-500">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CoursesModalContent;
