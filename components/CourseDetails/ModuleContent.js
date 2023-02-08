import { HiEllipsisVertical } from "react-icons/hi2";

const ModuleContent = ({}) => {
  return (
    <div className="flex gap-4 bg-slate-500 h-16 items-center ">
      <span className="ml-2 text-xl">::</span>
      <p className="text-xl">First Assignment</p>
      {/* if student show download button */}
      <div className="flex ml-auto items-center gap-4 mr-6">
        <button className="h-1/2 bg-blue-100 p-2 flex items-center rounded-sm">
          Download
        </button>
        {/* if teacher show edit/remove dropdown */}
        <span>
          <HiEllipsisVertical className="text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default ModuleContent;
