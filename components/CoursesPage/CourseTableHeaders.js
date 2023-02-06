const CourseTableHeaders = ({}) => {
  return (
    <tr className="text-xl">
      <th
        scope="col"
        class="text-md font-bold text-mainText0 px-6 py-4 text-left"
      >
        Course
      </th>
      <th
        scope="col"
        class="text-md font-bold text-mainText px-6 py-4 text-right"
      >
        Term
      </th>
      <th
        scope="col"
        class="text-md font-bold text-mainText px-6 py-4 text-right"
      >
        Enrolled as
      </th>
    </tr>
  );
};

export default CourseTableHeaders;
