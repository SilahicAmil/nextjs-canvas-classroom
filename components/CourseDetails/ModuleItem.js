import { HiEllipsisVertical } from "react-icons/hi2";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

const ModuleItem = ({ name, courseData, moduleName }) => {
  const [downloadFileLink, setDownloadFileLink] = useState("");

  const downloadFileHandler = async () => {
    const { data } = supabase.storage
      .from("modules")
      .getPublicUrl(`${courseData.name}/${moduleName}/${name}`, {
        download: true,
      });
    setDownloadFileLink(data["publicUrl"]);
  };

  return (
    <>
      <div className="flex gap-4 bg-[#FEFFFE] h-16 items-center border-black">
        <div className="flex w-full gap-4 h-full items-center border-b border-black">
          <span className="ml-2 text-xl cursor-pointer">::</span>
          <p className="lg:text-xl">{name ? name : "Please Upload a File"}</p>
          <div className="flex ml-auto items-center gap-4 mr-6 ">
            <button
              className="h-1/2 bg-blue-100 p-1 flex items-center rounded-md"
              onClick={downloadFileHandler}
            >
              <Link href={downloadFileLink} target="_blank" download>
                Download
              </Link>
            </button>

            {/* if teacher show remove dropdown */}
            <span>
              <HiEllipsisVertical className="text-2xl cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleItem;
