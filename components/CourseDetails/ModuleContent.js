import { HiEllipsisVertical } from "react-icons/hi2";
import Link from "next/link";
import ModuleItem from "./ModuleItem";

const ModuleContent = ({ courseData, moduleName, fileName }) => {
  if (fileName.length === 0) {
    return (
      <p className="h-16 text-lg flex items-center justify-center">
        Files will be displayed here
      </p>
    );
  }

  return (
    <>
      <div className="flex gap-4 bg-[#FEFFFE] h-16 items-center shadow-2xl border-t border-black w-full">
        <div className="flex w-full gap-4 border-b h-full items-center border-black">
          <span className="ml-2 text-xl">::</span>
          <p className="text-xl text-gray-400">
            A module is typically one unit or one week of content.
          </p>

          <div className="flex ml-auto items-center gap-4 mr-6">
            <span>
              <HiEllipsisVertical className="text-2xl" />
            </span>
          </div>
        </div>
      </div>

      {fileName.map((item, idx) => {
        return (
          <ModuleItem
            key={idx}
            name={item.name}
            courseData={courseData}
            moduleName={moduleName}
          />
        );
      })}
    </>
  );
};

export default ModuleContent;
