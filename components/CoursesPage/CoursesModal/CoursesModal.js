const CoursesModal = ({ children }) => {
  return (
    <div className="absolute m-auto bottom-0 top-0 left-0 right-0 w-64 h-64 bg-red-50 z-50 ">
      <h1>Hello</h1>
      {children}
    </div>
  );
};

export default CoursesModal;
