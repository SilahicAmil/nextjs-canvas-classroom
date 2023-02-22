import { use, useState } from "react";

import { HiEllipsisVertical } from "react-icons/hi2";
import Link from "next/link";

const ModuleItem = ({ name }) => {
  return (
    <>
      <div className="flex gap-4 bg-[#FEFFFE] h-16 items-center border-black">
        <div className="flex w-full gap-4 h-full items-center border-b border-black">
          <span className="ml-2 text-xl">::</span>
          <p className="text-xl">{name ? name : "Please Upload a File"}</p>
          {/* if student show download button */}
          <div className="flex ml-auto items-center gap-4 mr-6 ">
            <button className="h-1/2 bg-blue-100 p-2 flex items-center rounded-md">
              <Link href="#" target="_blank" download>
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

export default ModuleItem;
