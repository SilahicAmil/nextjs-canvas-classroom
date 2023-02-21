import { AiOutlinePlus } from "react-icons/ai";
import Header from "../Header/Header";
import ModuleCard from "./ModuleCard";
import ModuleModal from "./ModuleModal/ModuleModal";
import { createPortal } from "react-dom";
import { useState } from "react";

const CourseDetails = ({ courseData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [moduleData, setModuleData] = useState(courseData.modules);

  // console.log(moduleData.fileData);

  return (
    <>
      <div
        className={`m-8 w-11/12 ${
          openModal ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="ml-12 flex mb-6 gap-4 items-center">
          <Header>Course: {courseData.name}</Header>
          <span className="text-lg ">&gt;</span>
          <span className="text-lg"> {courseData.term}</span>
          <button
            className="bg-green-300 flex items-center justify-center ml-auto w-32 p-2 rounded-lg gap-4 text-md"
            onClick={() => setOpenModal(true)}
          >
            <AiOutlinePlus /> Module
          </button>
        </div>
        <div>
          <hr className="mt-4 mb-12 border-t border-black" />
        </div>

        <div className="flex gap-12 flex-1  m-auto h-full w-full">
          <div className=" flex-1 flex flex-col h-full ">
            {moduleData.map((module, idx) => {
              return (
                <ModuleCard
                  key={idx}
                  moduleName={module.moduleName}
                  moduleFiles={module.fileData}
                />
              );
            })}
          </div>

          <div className="flex flex-col h-96 flex-3 items-center gap-4 bg-red-300 w-64 text-xl">
            <h1>To Do :</h1>
            <div className="flex flex-col">
              {/* Should open the related module drop down (idk about this) */}
              <ul>
                <li>Assignment 32 *</li>
                <li>Assignment 12</li>
                <li>Assignment 22</li>
                <li>Assignment 42</li>
              </ul>
            </div>
            <span className="mt-auto mb-2 underline">* = Recently Updated</span>
          </div>
        </div>
      </div>
      {openModal &&
        createPortal(
          <ModuleModal courseData={courseData}>
            <button onClick={() => setOpenModal(false)}>Close</button>
          </ModuleModal>,
          document.getElementById("module-modal")
        )}
    </>
  );
};

export default CourseDetails;
