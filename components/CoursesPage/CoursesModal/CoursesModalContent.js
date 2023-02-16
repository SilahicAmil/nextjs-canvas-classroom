import { useRef } from "react";

const CoursesModalContent = ({ children, onAddCourse }) => {
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
    };
    // e.target.reset();

    onAddCourse(courseData);
    // console.log(courseData);
  };

  return (
    <>
      <div className="h-full w-full flex flex-col font-lato">
        <div className="flex justify-center items-center h-12">
          <h1 className="text-2xl font-semibold">Course Creation</h1>
        </div>
        <form onSubmit={createCourseSubmitHandler}>
          <div>
            <label htmlFor="name">Course Name</label>
            <input type="text" id="name" required ref={courseNameRef} />
          </div>
          <div>
            <label htmlFor="tag">Course Tag</label>
            <select id="tag" required ref={tagRef}>
              <option value="null">Select From Dropdown</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="English">Computer Science</option>
            </select>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              cols="30"
              rows="5"
              required
              ref={descriptionRef}
            />
          </div>
          <div>
            <button type="submit" className="p-2 bg-sky-500">
              Create
            </button>
          </div>
        </form>
        {children}
      </div>
    </>
  );
};

export default CoursesModalContent;
