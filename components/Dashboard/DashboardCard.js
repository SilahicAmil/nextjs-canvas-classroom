import { useEffect, useState } from "react";

import { HiEllipsisVertical } from "react-icons/hi2";
import Link from "next/link";

const DashboardCard = ({ courseName, description, tag }) => {
  const [colorChanger, setColorChanger] = useState("");

  useEffect(() => {
    let randomColor = "#000000".replace(/0/g, function () {
      // ~~ = double NOT bitwise operator - basically a faster Math.floor
      return (~~(Math.random() * 16)).toString(16);
    });
    setColorChanger(randomColor);
    // dont need to add dependency since useState is automatically used as a dependency
    // but YOLO I suppose
  }, [setColorChanger]);

  return (
    <>
      <div className="flex card w-72 h-72 bg-white shadow-2xl mt-6 rounded-lg  ">
        <div
          className={` bg-red-500 w-full h-full flex`}
          style={{ backgroundColor: colorChanger }}
        >
          <button className="flex ml-auto text-2xl mr-2 mt-4">
            <HiEllipsisVertical className="text-white" />
          </button>
        </div>
        <div className="card-body w-full">
          <h2 className="text-xl gap-2 flex items-center">
            <Link href={`/courses/${courseName}`} className="underline">
              {courseName}
            </Link>
            <div className="badge badge-primary flex items-center">{tag}</div>
          </h2>
          <div className="text-sm">
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
