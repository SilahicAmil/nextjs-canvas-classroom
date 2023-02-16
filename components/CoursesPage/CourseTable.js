import CourseTableHeaders from "./CourseTableHeaders";
import CourseTableRows from "./CourseTableRows";

const CourseTable = ({ courseData }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full ">
              <thead className="border-b">
                <CourseTableHeaders />
              </thead>
              <tbody>
                <CourseTableRows courseData={courseData} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
