import Courses from "@/components/CoursesPage/Courses";

const CoursesPage = ({}) => {
  const addNewCourseHandler = async (enteredCourseData) => {
    const response = await fetch("/api/create-course", {
      method: "POST",
      body: JSON.stringify(enteredCourseData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="w-full h-full">
        <Courses onAddCourse={addNewCourseHandler} />
      </div>
    </>
  );
};

export default CoursesPage;
