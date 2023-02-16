import Link from "next/link";

const CourseTableRows = ({ courseData }) => {
  return courseData.map((course) => {
    return (
      <tr className="border-b" key={course.id}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
          {/* eventually use the courseLink prop here */}
          <Link href={`/courses/${course.courseName}`}>
            {course.courseName}
          </Link>
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
          {course.term}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
          Student
        </td>
      </tr>
    );
  });
};

export default CourseTableRows;
