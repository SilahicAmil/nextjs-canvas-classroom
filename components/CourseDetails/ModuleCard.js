import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { useRef, useState } from "react";

import ModuleContent from "./ModuleContent";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

const ModuleCard = ({ moduleName, courseData }) => {
  const [openContent, setOpenContent] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef();
  const router = useRouter();

  const openContentHandler = () => {
    setOpenContent((prevState) => !prevState);
  };

  // HANDLE SUPBASE UPLOAD HERE
  const supabaseFileUploadHndler = async (e) => {
    e.preventDefault();
    const fileRefValue = fileRef.current.files[0];
    const fileRefName = fileRef.current.files[0].name;
    // handle errors eventually and loading

    try {
      setIsUploading(true);
      const { data, error } = await supabase.storage
        .from("modules")
        .upload(
          `${courseData.name}/${moduleName}/${fileRefName}`,
          fileRefValue,
          {
            cacheControl: "3600",
            upsert: false,
          }
        );

      setIsUploading(false);
    } catch (error) {
      console.log(error);
    }

    router.push(`/courses/${courseData.name}`);
  };

  // HANDLE DOWNLOAD HERE ALSO - PASS PROPS TO MODULE CONTENT
  // List all items in courseData.name bucket and download that way

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
          <h1 className="ml-8 text-2xl mr-auto">
            {moduleName ? moduleName : "Sample Module"}
          </h1>
          <div className="flex gap-8 items-center justify-center h-full ">
            {/* when clicking plus here it should upload the files to the related db module folder name  */}
            <form
              className="flex items-center"
              onSubmit={supabaseFileUploadHndler}
            >
              {/* eventually have this pop up as a modal or something  */}
              <input type="file" ref={fileRef} />
              <button type="submit">
                <AiOutlinePlus className="text-white text-xl" />
              </button>
            </form>

            <button className="mr-6">
              <AiOutlineDelete className="text-xl text-white" />
            </button>
          </div>
        </div>

        {openContent && !isUploading ? (
          <ModuleContent />
        ) : (
          <p className="flex items-center justify-center text-xl">
            Uploading File(s)...
          </p>
        )}
      </div>
    </>
  );
};

export default ModuleCard;
