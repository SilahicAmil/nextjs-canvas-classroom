import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

import ModuleContent from "./ModuleContent";
import ModuleItem from "./ModuleItem";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

const ModuleCard = ({ moduleName, courseData }) => {
  const [openContent, setOpenContent] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [fileContent, setFileContent] = useState([]);

  console.log("file content", fileContent);

  const fileRef = useRef();
  const router = useRouter();

  const openContentHandler = () => {
    setOpenContent((prevState) => !prevState);
  };

  // HANDLE SUPBASE UPLOAD HERE
  const supabaseFileUploadHandler = async (e) => {
    e.preventDefault();
    const fileRefValue = fileRef.current.files[0];
    const fileRefName = fileRef.current.files[0].name;

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

  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase.storage
        .from("modules")
        .list(`${courseData.name}/${moduleName}`, {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        });
      setFileContent(data);
    };
    fetchFiles();
  }, []);

  // HANDLE DOWNLOAD HERE ALSO - PASS PROPS TO MODULE CONTENT
  const fileDownloadHandler = (selectedFile) => {
    // pass the selected file through onDownloadFile
    // create a public URL and open it in a new tab
  };

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
          <h1 className="ml-8 text-2xl mr-auto">{moduleName}</h1>
          <div className="flex gap-8 items-center justify-center h-full ">
            {/* when clicking plus here it should upload the files to the related db module folder name  */}
            <form
              className="flex items-center"
              onSubmit={supabaseFileUploadHandler}
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
        {/* !isUploading kinda of doesnt make sense
            basically saying if isUploading is true
            probably change loading to a string eventually
            that says "loading", "finished", "error" and etc
         */}

        {openContent && !isUploading ? (
          <ModuleContent
            fileName={fileContent}
            courseData={courseData}
            moduleName={moduleName}
            onDownloadFile={fileDownloadHandler}
          />
        ) : (
          <p className="flex animate-pulse h-16 items-center justify-center text-xl">
            Uploading File...
          </p>
        )}
      </div>
    </>
  );
};

export default ModuleCard;
