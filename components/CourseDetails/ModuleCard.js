import { AiOutlinePlus } from "react-icons/ai";
import { HiEllipsisVertical } from "react-icons/hi2";
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
        className="w-full rounded-lg flex flex-col  mb-12 shadow-xl"
        onClick={openContentHandler}
      >
        <div className="flex w-full justify-between rounded-sm h-12 bg-slate-500 items-center">
          <h1 className="ml-8 text-2xl">Sample Module</h1>
          <div className="flex gap-8 items-center h-full ">
            <button className="text-xl">
              <AiOutlinePlus />
            </button>
            <span className="ml-auto mr-6 ">
              <HiEllipsisVertical className="text-2xl" />
            </span>
          </div>
        </div>
        {openContent ? <ModuleContent /> : null}
      </div>
    </>
  );
};

export default ModuleCard;
