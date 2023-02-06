import CourseTableHeaders from "./CourseTableHeaders";
import CourseTableRows from "./CourseTableRows";

const Courses = ({}) => {
  return (
    <>
      <div className="m-8 ">
        <h1 className="text-2xl text-mainText">All Courses</h1>
        <hr className="mt-6 border-t border-gray-400" />

        <div className="flex m-4 mt-6 items-center">
          <div className="flex gap-8 h-12">
            <button className="p-4 h-full flex items-center bg-gray-300 rounded-md border border-black">
              Browse More Courses
            </button>
            <button className="p-4 h-full flex items-center bg-gray-300 rounded-md border border-black">
              + Create Course
            </button>
          </div>
        </div>
        {/* extract table components to own file l8r */}

        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full ">
                  <thead class="border-b">
                    <CourseTableHeaders />
                  </thead>
                  <tbody>
                    <CourseTableRows />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
