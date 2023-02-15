import CoursesModalContent from "./CoursesModalContent";

const CoursesModal = ({ children }) => {
  return (
    <div className="absolute shadow-2xl m-auto bottom-0 top-0 left-0 right-0 w-2/3 h-2/3 bg-red-50 z-50 ">
      <CoursesModalContent />
      {children}
    </div>
  );
};

export default CoursesModal;
