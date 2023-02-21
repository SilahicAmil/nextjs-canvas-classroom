import { useRef, useState } from "react";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

const ModuleModal = ({ children, onAddModule, courseData }) => {
  const router = useRouter();
  const moduleNameRef = useRef();
  const inputFileRef = useRef();

  const moduleNameHandler = async (e) => {
    e.preventDefault();
    const moduleNameRefValue = moduleNameRef.current.value;
    const inputFileRefValue = inputFileRef.current.files[0];
    const inputFileName = inputFileRef.current.files[0].name;

    // onAddModule({
    //   moduleName: moduleNameRefValue,
    //   fileData: inputFileRefValue,
    //   courseName: courseData.name,
    // });

    const { data, error } = await supabase.storage
      .from("modules")
      .upload(
        `${courseData.name}/${moduleNameRefValue}/${inputFileName}`,
        inputFileRefValue
      );

    router.push(`/courses/${courseData.name}`);
  };

  return (
    <>
      <div className="flex-col flex top-0 m-auto z-50 shadow-2xl rounded-md left-0 bottom-0 right-0 items-center  absolute w-1/2 h-1/2 bg-slate-300 border border-black font-lato">
        <form className="flex flex-col" onSubmit={moduleNameHandler}>
          <label htmlFor="name">Module Name:</label>
          <input type="text" ref={moduleNameRef} />
          <label htmlFor="File Input">File Input</label>
          <input type="file" ref={inputFileRef} />
          <button type="submit">Submit</button>
        </form>

        {children}
      </div>
    </>
  );
};

export default ModuleModal;
