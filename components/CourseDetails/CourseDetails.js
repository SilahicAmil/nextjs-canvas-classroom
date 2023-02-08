import { AiOutlinePlus } from "react-icons/ai";
import Header from "../Header/Header";
import ModuleCard from "./ModuleCard";

const CourseDetails = ({}) => {
  return (
    <>
      <div className="m-8 w-11/12">
        <div className="ml-12">
          <Header>Intro to Science</Header>
        </div>
        <hr className=" mt-4 border-t border-gray-400" />

        <div className="flex items-center w-full mla-tuo gap-8  mb-6 mt-4">
          <button className="bg-green-300 flex items-center justify-center ml-auto w-32 p-2 rounded-lg gap-4 text-md">
            <AiOutlinePlus className="" /> Module
          </button>
        </div>
        <hr className="mb-6 border-t border-gray-400 " />
        <div className="flex gap-12 flex-1 w-11/12 m-auto">
          <aside className="w-32 flex flex-2 h-72 bg-red-50 items-center justify-center">
            <nav>
              <ul>
                <li>Home</li>
                <li>Modules</li>
                <li>Syllabus</li>
                <li>People</li>
              </ul>
            </nav>
          </aside>
          <div className=" flex-1 flex flex-col h-full ">
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
    </>
  );
};

export default CourseDetails;
