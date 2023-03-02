import { useRef, useState } from "react";

import CourseTable from "./CourseTable";
import CoursesModal from "./CoursesModal/CoursesModal";
import Header from "../UI/Header";
import { createPortal } from "react-dom";
import { useOnClickOutside } from "@/hooks/onClickOutside";
import { useSession } from "next-auth/react";

const Courses = ({ onAddCourse, courseData }) => {
  const { data: session, status } = useSession();
  const modalRef = useRef();
  const [openCoursesModal, setOpenCoursesModal] = useState(false);

  useOnClickOutside(modalRef, () => setOpenCoursesModal(false));

  return (
    <>
      <div
        className={`m-8 ${
          openCoursesModal ? "opacity-30 pointer-events-none" : "visible"
        }`}
      >
        <Header>Courses</Header>
        <hr className="mt-6 border-t border-gray-400" />

        <div className="flex m-4 mt-6 items-center">
          <div className="flex gap-8 h-12">
            <button className="p-4 h-full flex items-center bg-gray-300 rounded-md border border-black">
              Browse More Courses
            </button>
            {session.user.name === "teacher" ? (
              <button
                className="p-4 h-full flex items-center bg-gray-300 rounded-md border border-black"
                onClick={() => setOpenCoursesModal(true)}
              >
                + Create Course
              </button>
            ) : null}
          </div>
        </div>

        <CourseTable courseData={courseData} />
      </div>

      {openCoursesModal
        ? createPortal(
            <div ref={modalRef}>
              <CoursesModal
                onAddCourse={onAddCourse}
                onClick={() => setOpenCoursesModal(false)}
              >
                <button onClick={() => setOpenCoursesModal(false)}>
                  Close
                </button>
              </CoursesModal>
            </div>,
            document.getElementById("courses-modal")
          )
        : null}
    </>
  );
};

export default Courses;
