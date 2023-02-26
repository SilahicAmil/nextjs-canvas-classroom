import { AiOutlineDelete, AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

import ModuleContent from "./ModuleContent";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

const ModuleCard = ({ moduleName, courseData }) => {
  const [openContent, setOpenContent] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [fileContent, setFileContent] = useState([]);
  const [openFileUpload, setOpenFileUpload] = useState(false);
  const [isError, setIsError] = useState(false);

  const fileRef = useRef();
  const router = useRouter();

  const openContentHandler = () => {
    setOpenContent((prevState) => !prevState);
  };

  const openFileUploadHanlder = () => {
    setOpenFileUpload((prevState) => !prevState);
  };

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
      setIsError(true);
      console.log(error);
    }

    router.push(`/courses/${courseData.name}`);
  };

  useEffect(() => {
    const supabaseFetchFiles = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("modules")
          .list(`${courseData.name}/${moduleName}`, {
            limit: 100,
            offset: 0,
          });
        setFileContent(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    supabaseFetchFiles();
    // actually do need dependency array or else will endlessly fetch
  }, [courseData.name, moduleName]);

  if (isError === true) {
    return (
      <h1 className="text-3xl">An Error has Ocurred. Please try again!</h1>
    );
  }

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
          {/* just show this whole div conditionally based off of auth */}
          <div className="flex gap-8 items-center justify-center h-full ">
            {openFileUpload ? (
              <button onClick={openFileUploadHanlder}>
                <AiOutlineLine className="text-white text-xl" />
              </button>
            ) : (
              <button onClick={openFileUploadHanlder}>
                <AiOutlinePlus className="text-white text-xl" />
              </button>
            )}

            {/* will implement this way later */}
            <button className="mr-6">
              <AiOutlineDelete className="text-xl text-white" />
            </button>
          </div>
        </div>

        {openContent ? (
          <ModuleContent
            fileName={fileContent}
            courseData={courseData}
            moduleName={moduleName}
          />
        ) : null}

        {openFileUpload ? (
          <form
            className="flex items-center h-16 justify-center w-full bg-[#FEFFFE] gap-4"
            onSubmit={supabaseFileUploadHandler}
          >
            <input type="file" ref={fileRef} className="" />
            <button
              className="rounded-md bg-blue-100 text-black w-24 p-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        ) : null}

        {openContent && isUploading ? (
          <p className="flex animate-pulse h-16 items-center justify-center text-xl">
            Uploading File...
          </p>
        ) : null}
      </div>
    </>
  );
};

export default ModuleCard;
