import Link from "next/link";

const DashboardCard = ({ courseName, snippet, department, courseLink }) => {
  return (
    <>
      <div className="flex card w-72 h-72 bg-white shadow-xl mt-6 rounded-none hover:scale-105 hover:rounded-lg ">
        <div className="bg-red-500 w-full h-full flex">
          <button className="flex ml-auto text-2xl mr-2">:</button>
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
