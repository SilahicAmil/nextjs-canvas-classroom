import { AiOutlinePlus } from "react-icons/ai";
import Header from "../Header/Header";
import ModuleCard from "./ModuleCard";
import ModuleModal from "./ModuleModal/ModuleModal";
import { createPortal } from "react-dom";
import { useState } from "react";

const CourseDetails = ({ courseData, onAddModule }) => {
  const [openModal, setOpenModal] = useState(false);

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
          <button
            className="bg-green-500 text-black flex items-center justify-center ml-auto w-32 p-2 rounded-lg gap-4 text-md"
            onClick={() => setOpenModal(true)}
          >
            <AiOutlinePlus className="text-black" /> Module
          </button>
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

          <div className="flex flex-col h-full pb-4 flex-3 items-center gap-4 bg-slate-400 w-72 text-xl">
            <h1 className="mt-4">Quote of the Day</h1>
            <div className="w-3/4 tracking-wider h-full">
              <p>
                Nothing is more pathetic than people who run around in circles,
                ‘delving into the things that lie beneath,’ and conducting
                investigations into the souls of the people around them. -
                [Marcus Aurelius]
              </p>
            </div>
          </div>
        </div>
      </div>
      {openModal &&
        createPortal(
          <ModuleModal courseData={courseData} onAddModule={onAddModule}>
            <button onClick={() => setOpenModal(false)}>X</button>
          </ModuleModal>,
          document.getElementById("module-modal")
        )}
    </>
  );
};

export default CourseDetails;
