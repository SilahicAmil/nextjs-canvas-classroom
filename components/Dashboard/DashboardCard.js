import { useEffect, useState } from "react";

import { HiEllipsisVertical } from "react-icons/hi2";
import Link from "next/link";

const DashboardCard = ({ courseName, description, tag }) => {
  const [colorChanger, setColorChanger] = useState();

  useEffect(() => {
    let randomColor = "#000000".replace(/0/g, function () {
      // ~~ = double NOT bitwise operator - basically a faster Math.floor
      return (~~(Math.random() * 16)).toString(16);
    });
    setColorChanger(randomColor);
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
        <div className="card-body h-full  overflow-hidden">
          <h2 className="text-xl gap-2 flex items-center">
            <Link href={`/courses/${courseName}`} className="underline w-full">
              {courseName}
            </Link>
            <div className="badge badge-primary flex items-center h-fit">
              <span className="text-sm">{tag}</span>
            </div>
          </h2>
          <div className="">
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
