import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

import ModuleContent from "./ModuleContent";
import { useState } from "react";

const ModuleCard = ({}) => {
  const [openContent, setOpenContent] = useState(true);

  const openContentHandler = () => {
    setOpenContent((prevState) => !prevState);
  };

  return (
    <>
      <div
        className="w-full h-full rounded-lg flex flex-col  mb-12 shadow-xl hover:cursor-pointer"
        onClick={openContentHandler}
      >
        <div className="flex w-full justify-between rounded-sm h-12 bg-slate-500 items-center">
          {openContent ? (
            <div className="rotate-180 ml-2 text-xl">^</div>
          ) : (
            <div className="ml-2 text-xl">&gt;</div>
          )}
          <h1 className="ml-8 text-2xl mr-auto">Sample Module</h1>
          <div className="flex gap-8 items-center justify-center h-full ">
            {/* when clicking plus here it should upload the files to the related db module folder name  */}
            <button className="">
              <AiOutlinePlus className="text-white text-xl" />
            </button>

            <button className="mr-6">
              <AiOutlineDelete className="text-xl text-white" />
            </button>
          </div>
        </div>
        {openContent ? <ModuleContent /> : null}
      </div>
    </>
  );
};

export default ModuleCard;
