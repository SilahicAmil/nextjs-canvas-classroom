const ModuleModal = ({ children }) => {
  return (
    <>
      {/* when submitting here it should take the current course name and create an additioanl folder with the module name */}
      <div className="top-0 m-auto z-50 shadow-2xl rounded-md left-0 bottom-0 right-0 items-center  absolute w-1/2 h-1/2 bg-slate-300 border border-black font-lato">
        <h1>Modal Content</h1>
        {children}
      </div>
    </>
  );
};

export default ModuleModal;
