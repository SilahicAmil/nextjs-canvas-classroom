import CourseTableHeaders from "./CourseTableHeaders";
import CourseTableRows from "./CourseTableRows";
import CoursesModal from "./CoursesModal/CoursesModal";
import Header from "../Header/Header";
import { createPortal } from "react-dom";
import { useState } from "react";

const Courses = ({}) => {
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
        {/* extract table components to own file l8r */}

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full ">
                  <thead className="border-b">
                    <CourseTableHeaders />
                  </thead>
                  <tbody>
                    <CourseTableRows />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openCoursesModal
        ? createPortal(
            <CoursesModal>
              <button onClick={() => setOpenCoursesModal(false)}>Close</button>
            </CoursesModal>,
            document.getElementById("courses-modal")
          )
        : null}
    </>
  );
};

export default Courses;
