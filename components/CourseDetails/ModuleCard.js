import { AiOutlineDelete, AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

import ModuleContent from "./ModuleContent";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const ModuleCard = ({ moduleName, courseData }) => {
  const [openContent, setOpenContent] = useState(true);

  const [fileContent, setFileContent] = useState([]);
  const [openFileUpload, setOpenFileUpload] = useState(false);
  const [openAssigmentUpload, setOpenAssigmentUpload] = useState(false);
  const [isError, setIsError] = useState(false);

  const { data: session } = useSession();

  const fileRef = useRef();
  const assignmentRef = useRef();
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

    const { data, error } = await supabase.storage
      .from("modules")
      .upload(`${courseData.name}/${moduleName}/${fileRefName}`, fileRefValue, {
        cacheControl: "3600",
        upsert: false,
      });

    setTimeout(function () {
      router.push(`/courses/${courseData.name}`);
    }, 5100);

    if (!error) {
      return toast.success("Uploading File to Module!");
    } else {
      return toast.error("Upload has failed. Please Try Again!");
    }
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
        setIsError(true);
      }
    };
    supabaseFetchFiles();
    // actually do need dependency array or else will endlessly fetch
  }, [courseData.name, moduleName]);

  // Upload Assignment
  const uploadAssignmentHandler = async (e) => {
    e.preventDefault();
    const assignmentRefValue = assignmentRef.current.files[0];
    const assignmentRefname = assignmentRef.current.files[0].name;

    const { data, error } = await supabase.storage
      .from("assignments")
      .upload(
        `${session?.user.email}/${courseData.name}/${moduleName}/${assignmentRefname}`,
        assignmentRefValue,
        {
          cacheControl: "3600",
          upsert: false,
        }
      );

    setTimeout(function () {
      router.push(`/courses/${courseData.name}`);
    }, 5100);

    if (!error) {
      return toast.success("Uploading File to Module!");
    } else {
      return toast.error("Upload has failed. Please Try Again!");
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
      <div className="w-full h-full rounded-lg flex flex-col mb-12 shadow-xl ">
        <div className="flex  justify-between rounded-sm h-12 bg-slate-500 items-center">
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
          <h1 className="ml-8 lg:text-2xl md:text-xl mr-auto">{moduleName}</h1>

          {session?.user.name !== "teacher" ? (
            <div className="flex gap-8 items-center justify-center h-full ">
              <button
                className="mr-6 text-white lg:text-xl md:text-lg sm:text-md"
                onClick={() =>
                  setOpenAssigmentUpload((prevState) => !prevState)
                }
              >
                Upload Assignment
              </button>
            </div>
          ) : (
            <div className="flex gap-8 items-center justify-center h-full ">
              {openFileUpload ? (
                <button onClick={openFileUploadHanlder}>
                  <AiOutlineLine className="text-white text-xl" />
                </button>
              ) : (
                <button onClick={openFileUploadHanlder}>
                  <AiOutlinePlus className="text-white text-xl " />
                </button>
              )}

              {/* will implement this WAY later */}
              <button className="mr-6">
                <AiOutlineDelete className="text-xl text-white" />
              </button>
            </div>
          )}
        </div>

        {openContent ? (
          <ModuleContent
            fileName={fileContent}
            courseData={courseData}
            moduleName={moduleName}
          />
        ) : undefined}

        {openFileUpload ? (
          <form
            className="flex items-center h-16 justify-center w-full bg-[#FEFFFE] gap-4"
            onSubmit={supabaseFileUploadHandler}
          >
            <input type="file" ref={fileRef} className="ml-6" />
            <button
              className="rounded-md bg-blue-100 text-black w-24 p-1 mr-6"
              type="submit"
            >
              Submit
            </button>
          </form>
        ) : undefined}
        {openAssigmentUpload ? (
          <form
            className="flex items-center h-16 justify-center bg-[#FEFFFE] gap-4 "
            onSubmit={uploadAssignmentHandler}
          >
            <input type="file" ref={assignmentRef} />
            <button
              className="rounded-md bg-blue-100 text-black w-24 p-1 mr-6"
              type="submit"
            >
              Submit
            </button>
          </form>
        ) : undefined}
      </div>
    </>
  );
};

export default ModuleCard;
