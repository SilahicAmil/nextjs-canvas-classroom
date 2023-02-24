import { useRef, useState } from "react";

import { useRouter } from "next/router";

const ModuleModal = ({ children, courseData, onAddModule }) => {
  const router = useRouter();
  const moduleNameRef = useRef();

  const moduleNameHandler = async (e) => {
    e.preventDefault();
    const moduleNameRefValue = moduleNameRef.current.value;

    onAddModule({
      moduleName: moduleNameRefValue,
      courseName: courseData.name,
    });

    router.push(`/courses/${courseData.name}`);
  };

  return (
    <>
      <div className="flex-col flex top-0 m-auto z-50 shadow-2xl rounded-md left-0 bottom-0 right-0 items-center  absolute w-1/2 h-1/2 bg-[#FAF9F6] border border-black font-lato">
        <div className="flex mr-auto mt-4  ml-4 p-2 w-6 h-6 bg-red-500 items-center justify-center rounded-full ">
          {children}
        </div>
        <form
          className="flex flex-col w-1/2 m-auto gap-6"
          onSubmit={moduleNameHandler}
        >
          <label htmlFor="name" className=" flex text-3xl justify-center">
            Module Name
          </label>
          <input
            type="text"
            id="name"
            ref={moduleNameRef}
            className="h-12 text-2xl p-4 bg-gray-300 text-black"
          />

          <button
            type="submit"
            className="bg-sky-300 h-12 flex items-center text-2xl justify-center "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ModuleModal;
