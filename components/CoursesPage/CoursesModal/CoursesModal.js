import CoursesModalContent from "./CoursesModalContent";

const CoursesModal = ({ children, onAddCourse }) => {
  return (
    <div className="absolute w-2/3 h-2/3 shadow-2xl m-auto bottom-0 top-0 left-0 right-0  bg-red-50 z-50 border-black border rounded-md">
      <CoursesModalContent onAddCourse={onAddCourse}>
        {children}
      </CoursesModalContent>
    </div>
  );
};

export default CoursesModal;
