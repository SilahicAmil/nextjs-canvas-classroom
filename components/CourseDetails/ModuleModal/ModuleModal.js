import { useRef, useState } from "react";

const ModuleModal = ({ children, onAddModule, courseData }) => {
  const moduleNameRef = useRef();
  const inputFileRef = useRef();

  const moduleNameHandler = (e) => {
    e.preventDefault();
    const moduleNameRefValue = moduleNameRef.current.value;
    const inputFileRefValue = inputFileRef.current.files[0];

    onAddModule({
      moduleName: moduleNameRefValue,
      fileData: inputFileRefValue,
      courseName: courseData.name,
    });
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
