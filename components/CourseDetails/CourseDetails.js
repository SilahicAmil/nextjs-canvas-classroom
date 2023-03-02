import { useRef, useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import Header from "../UI/Header";
import ModuleCard from "./ModuleCard";
import ModuleModal from "./ModuleModal/ModuleModal";
import { createPortal } from "react-dom";
import { useOnClickOutside } from "@/hooks/onClickOutside";
import { useSession } from "next-auth/react";

const CourseDetails = ({ courseData, onAddModule }) => {
  const modalRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const { data: session, status } = useSession();

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
          <span className="text-lg ">&gt;</span>
          <span className="text-lg"> {courseData.term}</span>
          {session.user.name === "teacher" ? (
            <button
              className="bg-green-500 text-black flex items-center justify-center ml-auto w-32 p-2 rounded-lg gap-4 text-md"
              onClick={() => setOpenModal(true)}
            >
              <AiOutlinePlus className="text-black" /> Module
            </button>
          ) : undefined}
        </div>

        <div>
          <hr className="mt-4 mb-12 border-t border-black" />
        </div>
        <div className="flex gap-12 flex-1 m-auto h-full w-full">
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

          <div className="flex flex-col h-full  flex-3 items-center gap-4 rounded-md bg-slate-500 w-72 text-xl">
            <h1 className="mt-4 text-gray-200">Quote of the Day</h1>
            <div className="w-3/4 tracking-wider h-full text-gray-200">
              <p className="mb-4">
                Nothing is more pathetic than people who run around in circles,
                ‘delving into the things that lie beneath,’ and conducting
                investigations into the souls of the people around them. -
                [Marcus Aurelius]
              </p>
            </div>
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
