import { HiEllipsisVertical } from "react-icons/hi2";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

// create this into SampleModuleContent component
// and create another copy of this for real modules
const ModuleContent = ({ courseData, moduleName, onDownloadFile }) => {
  const [downloadFile, setDownloadFile] = useState("");

  const listFilesHandler = () => {
    // list all files from moduleName
    // add to useState and map over for each item
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

      <div className="flex gap-4 bg-[#FEFFFE] h-16 items-center border-black">
        <div className="flex w-full gap-4 h-full items-center border-b border-black">
          <span className="ml-2 text-xl">::</span>
          <p className="text-xl">First Assignment</p>
          {/* if student show download button */}
          <div className="flex ml-auto items-center gap-4 mr-6 ">
            <button className="h-1/2 bg-blue-100 p-2 flex items-center rounded-md">
              <Link href={downloadFile} target="_blank" download>
                Download
              </Link>
            </button>
            {/* if teacher show edit/remove dropdown */}
            <span>
              <HiEllipsisVertical className="text-2xl" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleContent;
