import Link from "next/link";

const CourseTableRows = () => {
  return (
    <tr class="border-b">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
        {/* eventually use the courseLink prop here */}
        <Link href="/courses/intro-to-science">Intro To Science</Link>
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
        2021-2022
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
        Student
      </td>
    </tr>
  );
};

export default CourseTableRows;
