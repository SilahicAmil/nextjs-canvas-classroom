import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

import ModuleContent from "./ModuleContent";
import { useState } from "react";

const ModuleCard = ({ courseData }) => {
  const [openContent, setOpenContent] = useState(true);
  const [moduleList, setModuleList] = useState([]);

  const openContentHandler = () => {
    setOpenContent((prevState) => !prevState);
  };

  const addModuleHandler = () => {
    setModuleList(moduleList.concat(<ModuleContent key={moduleList.length} />));
  };

  return (
    <>
      <div className="w-full h-full rounded-lg flex flex-col  mb-12 shadow-xl ">
        <div className="flex w-full justify-between rounded-sm h-12 bg-slate-500 items-center">
          {openContent ? (
            <div
              className="rotate-180 ml-2 text-xl cursor-pointer"
              onClick={openContentHandler}
            >
              ^
            </div>
          ) : (
            <div
              className="ml-2 text-xl cursor-pointer"
              onClick={openContentHandler}
            >
              &gt;
            </div>
          )}
          <h1 className="ml-8 text-2xl mr-auto">{courseData.modules}</h1>
          <div className="flex gap-8 items-center justify-center h-full ">
            {/* when clicking plus here it should upload the files to the related db module folder name  */}
            <button className="" onClick={addModuleHandler}>
              <AiOutlinePlus className="text-white text-xl" />
            </button>

            <button className="mr-6">
              <AiOutlineDelete className="text-xl text-white" />
            </button>
          </div>
        </div>
        {openContent ? <ModuleContent /> : null}
        {moduleList}
      </div>
    </>
  );
};

export default ModuleCard;
