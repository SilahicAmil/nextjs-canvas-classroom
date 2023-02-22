import { HiEllipsisVertical } from "react-icons/hi2";
import Link from "next/link";
import ModuleItem from "./ModuleItem";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

// create this into SampleModuleContent component
// and create another copy of this for real modules
const ModuleContent = ({
  courseData,
  moduleName,
  onDownloadFile,
  fileName,
}) => {
  const [downloadFile, setDownloadFile] = useState("");

  const downloadFilesHandler = () => {
    // take the fileName and add pass it to onDownloadFile()
  };

  return (
    <>
      <div className="flex gap-4 bg-[#FEFFFE] h-16 items-center shadow-2xl border-t border-black w-full">
        <div className="flex w-full gap-4 border-b h-full items-center border-black">
          <span className="ml-2 text-xl">::</span>
          <p className="text-xl text-gray-400">
            A module is typically one unit or one week of content.
          </p>
          {/* if student show download button */}
          <div className="flex ml-auto items-center gap-4 mr-6">
            {/* if teacher show edit/remove dropdown */}
            <span>
              <HiEllipsisVertical className="text-2xl" />
            </span>
          </div>
        </div>
      </div>

      {fileName.map((item) => {
        return <ModuleItem key={item} name={item.name} />;
      })}
    </>
  );
};

export default ModuleContent;
