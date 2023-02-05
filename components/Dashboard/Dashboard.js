import DashboardCard from "./DashboardCard";
import Link from "next/link";

const Dashboard = ({}) => {
  return (
    <>
      {/* dashboard title */}
      <div className="flex flex-col w-10/12 md:w-11/12 m-6 h-full">
        <div className="flex text-2xl mb-4">
          <h1 className="flex text-2xl">Dashboard</h1>
          <button className="ml-auto">:</button>
        </div>
        <hr className="w-full" />

        {/* maybe xtract into own component idk */}
        <div className="m-6">
          <div className="mb-2">
            <h1 className="text-2xl">Published Courses (5)</h1>
          </div>
          <hr className="w-11/12" />
          <div className="">
            <div className="lg:flex lg:flex-wrap lg:gap-4 md:grid md:grid-cols-2">
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
              <DashboardCard />
            </div>
          </div>
        </div>

        {/* unpublished courses */}
        <div className="m-6">
          <div className="mb-2">
            <h1 className="text-2xl">Unpublished Courses (1)</h1>
          </div>
          <hr className="w-11/12" />
          <div>
            <DashboardCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
