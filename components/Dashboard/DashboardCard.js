import { HiEllipsisVertical } from "react-icons/hi2";
import Link from "next/link";
import { useState } from "react";

const DashboardCard = ({ courseName, snippet, department, courseLink }) => {
  const [colorChanger, setColorChanger] = useState("");

  const colorChangeHandler = () => {
    setColorChanger("#2D6F45");
  };

  return (
    <>
      <div className="flex card w-72 h-72 bg-white shadow-2xl mt-6 rounded-lg  ">
        <div
          className={` bg-red-500  w-full h-full flex`}
          style={{ backgroundColor: colorChanger }}
        >
          <button className="flex ml-auto text-2xl mr-2 mt-4">
            <HiEllipsisVertical onClick={colorChangeHandler} />
          </button>
        </div>
        <div className="card-body w-full">
          <h2 className="text-xl gap-2 flex items-center">
            <Link href={`/courses/${courseLink}`} className="underline">
              {courseName}
            </Link>
            <div className="badge badge-primary">{department}</div>
          </h2>
          <div className="text-sm">
            <p className="">{snippet}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
