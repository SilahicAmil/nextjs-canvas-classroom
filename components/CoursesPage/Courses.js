import CourseTable from "./CourseTable";
import CoursesModal from "./CoursesModal/CoursesModal";
import Header from "../Header/Header";
import { createPortal } from "react-dom";
import { useState } from "react";

const Courses = ({ onAddCourse, courseData }) => {
  const [openCoursesModal, setOpenCoursesModal] = useState(false);

  return (
    <>
      <div
        className={`m-8 ${
          openCoursesModal ? "opacity-50 pointer-events-none" : "visible"
        }`}
      >
        <Header>Courses</Header>
        <hr className="mt-6 border-t border-gray-400" />

        <div className="flex m-4 mt-6 items-center">
          <div className="flex gap-8 h-12">
            <button className="p-4 h-full flex items-center bg-gray-300 rounded-md border border-black">
              Browse More Courses
            </button>
            {/* this should create a supabase DB of the name of the course */}
            <button
              className="p-4 h-full flex items-center bg-gray-300 rounded-md border border-black"
              onClick={() => setOpenCoursesModal(true)}
            >
              + Create Course
            </button>
          </div>
        </div>

        <CourseTable courseData={courseData} />
      </div>

      {openCoursesModal
        ? createPortal(
            <CoursesModal onAddCourse={onAddCourse}>
              <button onClick={() => setOpenCoursesModal(false)}>Close</button>
            </CoursesModal>,
            document.getElementById("courses-modal")
          )
        : null}
    </>
  );
};

export default Courses;
