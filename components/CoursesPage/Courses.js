const Courses = ({}) => {
  return (
    <>
      <div className="m-8 ">
        <h1 className="text-2xl ">All Courses</h1>
        <hr className="mt-6 border-t border-gray-400" />

        <div className="flex m-4 items-center">
          <div className="flex gap-8 h-12">
            <button className="p-4 h-full flex items-center bg-gray-300 rounded-md border border-black">
              Browse More Courses
            </button>
            <button className="p-4 h-full flex items-center bg-gray-300 rounded-md border border-black">
              + Create Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
