import { AiOutlinePlus } from "react-icons/ai";
import { HiEllipsisVertical } from "react-icons/hi2";
import ModuleContent from "./ModuleContent";

const ModuleCard = ({}) => {
  return (
    <>
      <div className="w-full bg-red-50 rounded-lg flex flex-col mb-12 ">
        <div className="flex w-full justify-between rounded-sm h-12 bg-blue-300 items-center">
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
        <ModuleContent />
      </div>
    </>
  );
};

export default ModuleCard;
