import { AiOutlinePlus } from "react-icons/ai";
import Header from "../Header/Header";
import ModuleCard from "./ModuleCard";
import ModuleModal from "./ModuleModal/ModuleModal";
import { createPortal } from "react-dom";
import { useState } from "react";

const CourseDetails = ({}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={`m-8 ${openModal ? " opacity-50" : "opacity-100"}`}>
        <div className="ml-12">
          {/* eventually update name dynamically */}
          <Header>Course: Intro to Science</Header>
        </div>
        <hr className="mt-4 border-t border-gray-400" />

        <div className="flex items-center w-full gap-8 mb-6 mt-4">
          <button
            className="bg-green-300 flex items-center justify-center ml-auto w-32 p-2 rounded-lg gap-4 text-md"
            onClick={() => setOpenModal(true)}
          >
            <AiOutlinePlus className="" /> Module
          </button>
        </div>
        <hr className="mb-6 border-t border-gray-400" />
        <div className="flex gap-12 flex-1 w-11/12 m-auto">
          <aside className="-ml-16 flex flex-2 bg-slate-500 ">
            <nav>
              <ul className="flex text-white flex-col gap-8 h-full w-32 items-center">
                <li className="mt-24">Home</li>
                <li>Modules</li>
                <li>Syllabus</li>
                <li>People</li>
              </ul>
            </nav>
          </aside>
          <div className=" flex-1 flex flex-col h-full">
            <ModuleCard />
            <ModuleCard />
            <ModuleCard />
          </div>

          <div className="flex flex-col h-full flex-3 items-center gap-4 bg-red-300 w-64 text-xl underline">
            <h1>To Do :</h1>
            <div className="flex flex-col">
              {/* Should open the related module drop down */}
              <ul>
                <li>Assignment 32 *</li>
                <li>Assignment 12</li>
                <li>Assignment 22</li>
                <li>Assignment 42</li>
              </ul>
            </div>
            <span className="mt-auto mb-2">* = Recently Updated</span>
          </div>
        </div>
      </div>
      {openModal &&
        createPortal(<ModuleModal />, document.getElementById("module-modal"))}
    </>
  );
};

export default CourseDetails;
