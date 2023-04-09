import { useRef, useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import Header from "../UI/Header";
import Link from "next/link";
import ModuleCard from "./ModuleCard";
import ModuleModal from "./ModuleModal/ModuleModal";
import { createPortal } from "react-dom";
import { useOnClickOutside } from "@/hooks/onClickOutside";
import { useSession } from "next-auth/react";

const CourseDetails = ({ courseData, onAddModule }) => {
  const modalRef = useRef();
  const [openModal, setOpenModal] = useState(false);

  const { data: session } = useSession();

  useOnClickOutside(modalRef, () => setOpenModal(false));

  return (
    <>
      <div
        className={`m-8 w-11/12 ${
          openModal ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="ml-12 flex mb-6 gap-4 items-center ">
          <Header>Course: {courseData.name}</Header>
          <span className="lg:text-lg md:text-md sm:text-sm">&gt;</span>
          <span className="lg:text-lg md:text-md sm:text-sm">
            {courseData.term}
          </span>
          {session?.user.name === "teacher" ? (
            <button
              className="bg-green-500 text-black flex items-center justify-center ml-auto w-32 p-2 rounded-lg gap-4 text-md"
              onClick={() => setOpenModal(true)}
            >
              <AiOutlinePlus className="text-black" /> Module
            </button>
          ) : null}
        </div>

        <div>
          <hr className="mt-4 mb-12 border-t border-black" />
        </div>
        <div className="flex gap-12 flex-1 m-auto h-full lg:w-full md:w-[100vw] xsm:w-[100vw] sm:w-[100w]">
          <div className=" flex-1 flex flex-col h-full ">
            {courseData.modules.map((module, idx) => {
              return (
                <ModuleCard
                  key={idx}
                  moduleName={module.moduleName}
                  courseData={courseData}
                />
              );
            })}
          </div>
        </div>
        {openModal &&
          createPortal(
            <div ref={modalRef}>
              <ModuleModal courseData={courseData} onAddModule={onAddModule}>
                <button onClick={() => setOpenModal(false)}>Close</button>
              </ModuleModal>
            </div>,
            document.getElementById("module-modal")
          )}
      </div>
    </>
  );
};

export default CourseDetails;
